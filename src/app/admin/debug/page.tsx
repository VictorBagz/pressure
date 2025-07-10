
import { firestore } from '@/lib/firebase';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AlertCircle, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// A simple utility to mask sensitive keys for display
const maskValue = (value: string | undefined, keepChars = 4): string => {
  if (!value) return 'Not Set';
  if (value.length <= keepChars * 2) return 'Value too short to mask';
  return `${value.substring(0, keepChars)}...${value.substring(value.length - keepChars)}`;
};

const checkPrivateKeyFormat = (key: string | undefined): { valid: boolean; message: string } => {
    if (!key) {
        return { valid: false, message: 'Private Key is not set.' };
    }
    const trimmedKey = key.trim();
    if (!trimmedKey.startsWith('-----BEGIN PRIVATE KEY-----') || !trimmedKey.endsWith('-----END PRIVATE KEY-----')) {
        return { valid: false, message: 'Key does not have the correct BEGIN/END markers.' };
    }
    if (trimmedKey.length < 200) {
        return { valid: false, message: 'Key appears to be too short.' };
    }
    return { valid: true, message: 'Key format appears correct.' };
};

export default async function DebugPage() {
    let connectionStatus = { success: false, error: 'Unknown error' };
    try {
        // Attempt a simple read operation to test the connection
        await firestore.listCollections();
        connectionStatus = { success: true, error: '' };
    } catch (e: any) {
        connectionStatus = { success: false, error: e.message || 'Failed to connect' };
    }

    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKeyStatus = checkPrivateKeyFormat(process.env.FIREBASE_PRIVATE_KEY);
    
    return (
        <div className="flex flex-col min-h-screen bg-secondary">
            <Header />
            <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    <Card className="shadow-2xl">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-primary">Firebase Connection Debug</CardTitle>
                            <CardDescription>This page checks the server-side Firebase Admin connection status.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-lg mb-2 text-primary">Loaded Environment Variables</h3>
                                <div className="space-y-2 text-sm p-4 bg-muted rounded-lg">
                                    <p><strong>Project ID:</strong> <span className="font-mono bg-white/50 px-2 py-1 rounded">{projectId || 'Not Set'}</span></p>
                                    <p><strong>Client Email:</strong> <span className="font-mono bg-white/50 px-2 py-1 rounded">{clientEmail || 'Not Set'}</span></p>
                                    <p><strong>Private Key Status:</strong> <span className={`font-mono px-2 py-1 rounded ${privateKeyStatus.valid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{privateKeyStatus.message}</span></p>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg mb-2 text-primary">Connection Test</h3>
                                {connectionStatus.success ? (
                                    <div className="flex items-center p-4 bg-green-100 text-green-800 rounded-lg">
                                        <CheckCircle className="h-5 w-5 mr-3" />
                                        <div>
                                            <p className="font-bold">Success!</p>
                                            <p>Successfully connected to Firestore.</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-start p-4 bg-red-100 text-red-800 rounded-lg">
                                        <AlertCircle className="h-5 w-5 mr-3 mt-1 shrink-0" />
                                        <div>
                                            <p className="font-bold">Connection Failed</p>
                                            <p className="font-mono text-xs break-all">{connectionStatus.error}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="pt-4 border-t">
                                <h3 className="font-semibold text-lg mb-2 text-primary">Next Steps</h3>
                                <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                                    <li>Compare the 'Loaded Environment Variables' above with the values in your Firebase JSON key file.</li>
                                    <li>Ensure there are no typos or extra spaces in your <code>.env</code> file.</li>
                                    <li>If the private key status is invalid, re-copy the entire key, including the BEGIN/END markers.</li>
                                    <li>If variables show as 'Not Set', ensure your <code>.env</code> file is in the project's root directory and the app has been restarted.</li>
                                </ol>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
