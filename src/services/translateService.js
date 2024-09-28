import axios from 'axios';

// Replace 'your_api_key_here' with your actual API key or use environment variables
const API_KEY = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY;
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

export const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post(API_URL, null, {
      params: {
        q: text,
        target: targetLanguage,
        key: API_KEY,
      },
    });

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    throw error;
  }
};
