import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

// A separate function to handle Sentry configuration with error handling
const sentryConfig = () => {
  try {
    return withSentryConfig(nextConfig, {
      org: "devdes",
      project: "javascript-nextjs",
      silent: !process.env.CI,
      widenClientFileUpload: true,
      hideSourceMaps: true,
      disableLogger: true,
      automaticVercelMonitors: true,
    });
  } catch (error) {
    // Ensure the caught error is an instance of Error and log it
    if (!(error instanceof Error)) {
      console.error("Unexpected non-error object caught:", error);
      throw new Error(`Unexpected error: ${error}`);
    }
    // Log the error for debugging
    console.error("Error during Sentry configuration:", error);
    throw error; // Re-throw the error after logging it
  }
};

// Export the configured Sentry settings
export default sentryConfig();
