import { useCallback } from 'react';

const useHaptic = () => {
  const trigger = useCallback((pattern = 50) => {
    // Check if the browser supports the Vibration API
    if (typeof window !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {
       
      }
    }
  }, []);

  return {
    lightTap: () => trigger(10), // Very short, subtle tap
    mediumTap: () => trigger(40), // Standard satisfying tap
    heavyTap: () => trigger(80), // Stronger tap for major actions
    success: () => trigger([30, 60, 40]), // distinct double tap for success
    error: () => trigger([50, 50, 50, 50, 50]), // Stutter pattern for errors
    trigger, // For custom patterns
  };
};

export default useHaptic;
