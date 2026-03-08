// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  AUTH: `${API_BASE_URL}/api/auth`,
  CHILD: `${API_BASE_URL}/api/child`,
  CLUB: `${API_BASE_URL}/api/club`,
  DAYCAMP: `${API_BASE_URL}/api/daycamp`,
  ADMIN: `${API_BASE_URL}/api/admin`,
  VOLUNTEER: `${API_BASE_URL}/api/volunteer`,
  MESSAGES: `${API_BASE_URL}/api/messages`,
  DOCUMENTS: `${API_BASE_URL}/api/documents`,
  UPDATE: `${API_BASE_URL}/api/update`,
};

export default API_BASE_URL;
