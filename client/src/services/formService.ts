
interface SubmissionData {
    name: string;
    email: string;
    phone: string;
    packageType: 'Starter' | 'Custom';
    description: string;
    websiteStatus?: string;
    budget?: string;
    timeline?: string;
    additionalDetails?: string;
}

// ⚠️ PLACEHOLDERS: These will be updated once you provide the Google Form Link
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdidKQkw_qvajyX70yqhhQGhjP1MEn9jBt5OQETL0M0a8NZMQ/formResponse';

const FIELD_IDS = {
    name: 'entry.884809778',
    email: 'entry.1477863804',
    phone: 'entry.1352829417',
    packageType: 'entry.568335616',
    description: 'entry.1540791448',
    websiteStatus: 'entry.79253022',
    budget: 'entry.522784306',
    timeline: 'entry.1263874730',
    additionalDetails: 'entry.372467794',
};

/**
 * Submits data to Google Forms using 'no-cors' mode.
 * Note: 'no-cors' means we can't read the response, but it allows the request to go through.
 */
export const submitToGoogleForm = async (data: SubmissionData): Promise<boolean> => {
    const formData = new FormData();

    // Map data to Google Form Entry IDs
    formData.append(FIELD_IDS.name, data.name);
    formData.append(FIELD_IDS.email, data.email);
    formData.append(FIELD_IDS.phone, data.phone);
    formData.append(FIELD_IDS.packageType, data.packageType);
    formData.append(FIELD_IDS.description, data.description || 'N/A');
    formData.append(FIELD_IDS.websiteStatus, data.websiteStatus || 'N/A');
    formData.append(FIELD_IDS.budget, data.budget || 'N/A');
    formData.append(FIELD_IDS.timeline, data.timeline || 'N/A');

    // Combine extra details if present
    if (data.additionalDetails) {
        formData.append(FIELD_IDS.additionalDetails, data.additionalDetails);
    }

    try {
        await fetch(GOOGLE_FORM_ACTION_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formData,
        });
        // Since we use no-cors, we assume success if no network error occurred
        return true;
    } catch (error) {
        console.error('Google Form submission error:', error);
        return false;
    }
};
