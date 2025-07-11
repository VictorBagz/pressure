
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleForm from "../ArticleForm";

export default function NewArticlePage() {
    return (
        <div className="flex flex-col min-h-screen bg-secondary">
            <Header />
            <main className="flex-grow flex items-center justify-center py-12 px-4">
                <ArticleForm />
            </main>
            <Footer />
        </div>
    );
}
