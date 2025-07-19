/**
 * AI Services Layer for Cozyartz Media Group Website Builder
 * 
 * Provides AI-powered content generation, business analysis, and image processing
 * using Cloudflare Workers AI for optimal performance and cost efficiency.
 */

// Cloudflare AI model configurations
const CLOUDFLARE_AI_MODELS = {
  // Primary content generation model - excellent for business copy
  content: "@cf/meta/llama-3.1-70b-instruct",
  
  // Multimodal model for image understanding and menu analysis
  vision: "@cf/meta/llama-4-scout-17b",
  
  // Alternative high-quality content model
  alternative: "@cf/mistral/mistral-small-3.1-24b-instruct",
  
  // Multilingual support model
  multilingual: "@cf/google/gemma-3-12b-it"
};

// Initialize Cloudflare AI client
let cloudflareAI = null;

// Business type templates for AI content generation
const BUSINESS_TYPE_PROMPTS = {
  restaurant: {
    contentPrompt: "Generate compelling restaurant content focusing on authentic cuisine, dining experience, and local community.",
    imagePrompt: "Professional restaurant interior or signature dish, warm lighting, inviting atmosphere",
    serviceKeywords: ["dine-in", "takeout", "delivery", "catering", "private events"],
    layoutType: "restaurant"
  },
  foodtruck: {
    contentPrompt: "Generate exciting food truck content emphasizing mobility, street food culture, and urban dining.",
    imagePrompt: "Vibrant food truck with urban background, neon lighting, street food aesthetic",
    serviceKeywords: ["mobile orders", "catering", "events", "street food", "quick service"],
    layoutType: "foodtruck"
  },
  salon: {
    contentPrompt: "Generate professional beauty salon content highlighting expertise, services, and client satisfaction.",
    imagePrompt: "Modern beauty salon interior, professional styling station, clean and elegant",
    serviceKeywords: ["hair styling", "coloring", "treatments", "bridal services", "consultations"],
    layoutType: "universal"
  },
  automotive: {
    contentPrompt: "Generate trustworthy automotive service content emphasizing reliability, expertise, and customer service.",
    imagePrompt: "Professional auto repair shop, clean garage, modern equipment",
    serviceKeywords: ["diagnostics", "repairs", "maintenance", "inspections", "emergency service"],
    layoutType: "universal"
  },
  contractor: {
    contentPrompt: "Generate reliable contractor content showcasing craftsmanship, experience, and project quality.",
    imagePrompt: "Professional construction or renovation work, quality materials, skilled craftsmanship",
    serviceKeywords: ["construction", "renovation", "remodeling", "estimates", "project management"],
    layoutType: "universal"
  },
  retail: {
    contentPrompt: "Generate engaging retail content highlighting products, customer experience, and store atmosphere.",
    imagePrompt: "Modern retail storefront or interior, attractive product displays, welcoming environment",
    serviceKeywords: ["product sales", "custom orders", "consultation", "gift services", "special events"],
    layoutType: "universal"
  }
};

/**
 * Initialize Cloudflare AI services
 */
export function initializeAI() {
  try {
    if (typeof process !== 'undefined' && process.env) {
      // Check for Cloudflare credentials
      const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
      const apiToken = process.env.CLOUDFLARE_API_TOKEN;
      
      if (accountId && apiToken) {
        cloudflareAI = {
          accountId,
          apiToken,
          baseUrl: `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/`
        };
      }
    }
    
    return {
      cloudflareAvailable: !!cloudflareAI,
      modelsAvailable: Object.keys(CLOUDFLARE_AI_MODELS),
      initialized: !!cloudflareAI
    };
  } catch (error) {
    console.error('Error initializing Cloudflare AI services:', error);
    return {
      cloudflareAvailable: false,
      modelsAvailable: [],
      initialized: false
    };
  }
}

/**
 * Make a request to Cloudflare Workers AI
 */
async function callCloudflareAI(model, messages, options = {}) {
  if (!cloudflareAI) {
    throw new Error('Cloudflare AI not initialized. Please set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN environment variables.');
  }

  const {
    max_tokens = 2000,
    temperature = 0.7,
    stream = false
  } = options;

  try {
    const response = await fetch(`${cloudflareAI.baseUrl}${model}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${cloudflareAI.apiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: messages,
        max_tokens,
        temperature,
        stream
      })
    });

    if (!response.ok) {
      throw new Error(`Cloudflare AI request failed: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Cloudflare AI API error:', error);
    throw error;
  }
}

/**
 * Analyze menu image using Cloudflare AI vision
 * @param {string} imageUrl - URL or base64 of menu image
 * @param {string} businessName - Name of the business
 * @returns {Promise<Object>} Extracted menu data
 */
export async function analyzeMenuImage(imageUrl, businessName = '') {
  if (!cloudflareAI) {
    throw new Error('Cloudflare AI not initialized. Please set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN environment variables.');
  }

  try {
    const messages = [
      {
        role: "user",
        content: `Analyze this menu image for ${businessName}. Extract all menu items with names, descriptions, and prices. Format as JSON with categories. Focus on accuracy and completeness. Include any specials or featured items.

Return a JSON object with this structure:
{
  "businessName": "${businessName}",
  "categories": {
    "category_name": [
      {
        "name": "Item Name",
        "description": "Item description",
        "price": "$X.XX"
      }
    ]
  },
  "specials": [
    {
      "name": "Special Item",
      "description": "Special description", 
      "price": "$X.XX"
    }
  ],
  "businessType": "restaurant|foodtruck|cafe",
  "cuisine": "cuisine type if applicable"
}

Image: ${imageUrl}`
      }
    ];

    const response = await callCloudflareAI(CLOUDFLARE_AI_MODELS.vision, messages, {
      max_tokens: 1500,
      temperature: 0.3
    });

    const content = response.result?.response || response.result || '';
    
    // Parse JSON response
    try {
      const menuData = JSON.parse(content);
      return {
        success: true,
        data: menuData,
        extractedItems: Object.values(menuData.categories || {}).flat().length,
        model: CLOUDFLARE_AI_MODELS.vision
      };
    } catch (parseError) {
      // If JSON parsing fails, return structured text analysis
      return {
        success: false,
        error: 'JSON parsing failed',
        rawContent: content,
        suggestion: 'AI analysis completed but returned non-JSON format. Manual processing may be needed.',
        model: CLOUDFLARE_AI_MODELS.vision
      };
    }

  } catch (error) {
    console.error('Menu image analysis error:', error);
    return {
      success: false,
      error: error.message,
      suggestion: 'Try with a clearer image or different format'
    };
  }
}

/**
 * Generate business content using Cloudflare AI
 * @param {Object} businessInfo - Basic business information
 * @returns {Promise<Object>} Generated content package
 */
export async function generateBusinessContent(businessInfo) {
  if (!cloudflareAI) {
    throw new Error('Cloudflare AI not initialized. Please set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN environment variables.');
  }

  const { 
    businessName, 
    businessType = 'restaurant', 
    city = 'Battle Creek', 
    state = 'Michigan',
    specialty = '',
    targetAudience = '',
    existingDescription = ''
  } = businessInfo;

  const template = BUSINESS_TYPE_PROMPTS[businessType] || BUSINESS_TYPE_PROMPTS.restaurant;

  try {
    const messages = [
      {
        role: "system",
        content: "You are an expert copywriter for Cozyartz Media Group creating compelling website content for local Michigan businesses. Always respond with valid JSON format."
      },
      {
        role: "user",
        content: `Generate comprehensive website content for:
Business: ${businessName}
Type: ${businessType}
Location: ${city}, ${state}
Specialty: ${specialty}
Target Audience: ${targetAudience}
${existingDescription ? `Existing Description: ${existingDescription}` : ''}

${template.contentPrompt}

Create content with these elements and return as JSON:
{
  "pageTitle": "SEO-optimized page title (under 60 characters)",
  "metaDescription": "Compelling meta description (150-160 characters)",
  "heroTitle": "Catchy, benefit-focused headline",
  "heroSubtitle": "Supporting details, location-specific",
  "businessDescription": "2-3 paragraphs emphasizing local connection and quality",
  "services": ["Service 1", "Service 2", "Service 3", "Service 4", "Service 5", "Service 6"],
  "keywords": ["keyword1", "keyword2", "keyword3", "local seo", "Michigan business"],
  "ctaText": "Compelling action phrase",
  "specialOffers": [
    {
      "name": "Special Offer 1",
      "description": "Description",
      "discount": "Discount details"
    }
  ],
  "hours": [
    "Monday: 9:00 AM - 5:00 PM",
    "Tuesday: 9:00 AM - 5:00 PM"
  ]
}

Focus on local Michigan community connection, quality, authenticity, professional credibility, and clear value propositions.`
      }
    ];

    const response = await callCloudflareAI(CLOUDFLARE_AI_MODELS.content, messages, {
      max_tokens: 2000,
      temperature: 0.7
    });

    const content = response.result?.response || response.result || '';
    
    try {
      const generatedContent = JSON.parse(content);
      
      return {
        success: true,
        data: {
          ...generatedContent,
          layoutType: template.layoutType,
          aiGenerated: true,
          generatedAt: new Date().toISOString(),
          model: CLOUDFLARE_AI_MODELS.content
        }
      };
    } catch (parseError) {
      // Return structured fallback if JSON parsing fails
      return {
        success: false,
        error: 'JSON parsing failed',
        rawContent: content,
        suggestion: 'AI generated content but in non-JSON format',
        model: CLOUDFLARE_AI_MODELS.content
      };
    }

  } catch (error) {
    console.error('Business content generation error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Generate business configuration from AI analysis
 * @param {Object} params - Analysis parameters
 * @returns {Promise<Object>} Complete business configuration
 */
export async function generateBusinessConfig(params) {
  const {
    businessName,
    businessType,
    city,
    state = 'Michigan',
    phone,
    address,
    menuImage = null,
    competitorUrls = [],
    specialty = ''
  } = params;

  try {
    // Initialize results object
    const results = {
      businessInfo: {
        businessName,
        businessType,
        city,
        state,
        phone,
        address,
        specialty
      },
      contentGeneration: null,
      menuAnalysis: null,
      competitorAnalysis: null,
      finalConfig: null
    };

    // Generate AI content
    console.log('Generating AI content...');
    const contentResult = await generateBusinessContent({
      businessName,
      businessType,
      city,
      state,
      specialty
    });
    results.contentGeneration = contentResult;

    // Analyze menu image if provided
    if (menuImage) {
      console.log('Analyzing menu image...');
      const menuResult = await analyzeMenuImage(menuImage, businessName);
      results.menuAnalysis = menuResult;
    }

    // Generate competitor analysis (placeholder for future implementation)
    if (competitorUrls.length > 0) {
      results.competitorAnalysis = {
        message: 'Competitor analysis feature coming soon',
        urls: competitorUrls
      };
    }

    // Create final business configuration
    if (results.contentGeneration.success) {
      const aiContent = results.contentGeneration.data;
      const menuData = results.menuAnalysis?.success ? results.menuAnalysis.data : {};
      
      const slug = businessName.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      results.finalConfig = {
        [slug]: {
          // Basic Information
          title: aiContent.pageTitle || `${businessName} - ${specialty}`,
          description: aiContent.metaDescription || aiContent.businessDescription,
          businessName,
          phone,
          
          // AI-Generated Content
          heroTitle: aiContent.heroTitle || specialty,
          heroSubtitle: aiContent.heroSubtitle || `${businessName} serving ${city}, ${state}`,
          businessDescription: aiContent.businessDescription,
          
          // Layout Configuration
          layoutType: aiContent.layoutType || 'universal',
          businessType: businessType,
          
          // Services and Menu
          services: aiContent.services || [],
          ...(menuData.categories && { menu: menuData.categories }),
          ...(menuData.specials && { specialOffers: menuData.specials }),
          
          // Location Data
          address: {
            street: address.street || '',
            city,
            state,
            zip: address.zip || ''
          },
          geo: address.geo || {
            latitude: 42.3211, // Default to Battle Creek
            longitude: -85.1797
          },
          
          // SEO and Marketing
          keywords: aiContent.keywords || [],
          ctaText: aiContent.ctaText || "Contact Us Today",
          ctaPhone: phone,
          
          // AI Metadata
          aiGenerated: true,
          generatedAt: new Date().toISOString(),
          aiProvider: 'anthropic-claude-3.5-sonnet',
          
          // Deployment Configuration
          deployment: {
            subdomain: `${slug}.wantthissite.com`,
            customDomain: null,
            cloudflareProjectId: null,
            migrationReady: true
          }
        }
      };
    }

    return {
      success: true,
      data: results
    };

  } catch (error) {
    console.error('Business configuration generation error:', error);
    return {
      success: false,
      error: error.message,
      data: null
    };
  }
}

/**
 * Generate business image using Cloudflare AI (Stable Diffusion)
 * @param {string} prompt - Image generation prompt
 * @param {Object} options - Generation options
 * @returns {Promise<Object>} Generated image data
 */
export async function generateBusinessImage(prompt, options = {}) {
  if (!cloudflareAI) {
    throw new Error('Cloudflare AI not initialized. Please set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN environment variables.');
  }

  try {
    const imagePrompt = `Professional business website image: ${prompt}. Clean, modern, high-quality photography style, suitable for business website, professional lighting, commercial photography`;

    const response = await fetch(`${cloudflareAI.baseUrl}@cf/stabilityai/stable-diffusion-xl-base-1.0`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${cloudflareAI.apiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: imagePrompt,
        num_steps: 20,
        guidance_scale: 7.5,
        ...options
      })
    });

    if (!response.ok) {
      throw new Error(`Cloudflare AI image generation failed: ${response.status} ${response.statusText}`);
    }

    const imageBlob = await response.blob();
    const imageUrl = URL.createObjectURL(imageBlob);

    return {
      success: true,
      data: {
        url: imageUrl,
        blob: imageBlob,
        prompt: imagePrompt,
        generatedAt: new Date().toISOString(),
        model: '@cf/stabilityai/stable-diffusion-xl-base-1.0'
      }
    };

  } catch (error) {
    console.error('Image generation error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Validate Cloudflare AI service availability
 * @returns {Object} Service status
 */
export function getAIServiceStatus() {
  return {
    cloudflare: !!cloudflareAI,
    modelsAvailable: Object.keys(CLOUDFLARE_AI_MODELS),
    initialized: !!cloudflareAI,
    accountId: cloudflareAI?.accountId ? '***' + cloudflareAI.accountId.slice(-4) : 'Not set',
    primaryModel: CLOUDFLARE_AI_MODELS.content
  };
}

// Auto-initialize on import
initializeAI();