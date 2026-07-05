// src/utils/notifier.ts

type NotificationType = 'success' | 'warning' | 'error';

export const notify = (message: string, type: NotificationType = 'success') => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [UI-NOTIFY] [${type.toUpperCase()}]: ${message}`);
  
  // Straightforward fallback alert for immediate browser feedback
  if (type === 'error') {
    alert(`⚠️ System Alert: ${message}`);
  }
};