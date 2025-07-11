
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleForm from "../../ArticleForm";
import { firestore } from "@/lib/firebase";
import { notFound } from "next/navigation";

async function getArticle(id: string) {
    const doc = await firestore.collection('news').doc(id).get();
    if (!doc.exists) {
        return null;
    }
    return doc.data();
}

export default async function EditArticlePage({ params }: { params: { id: string } }) {
    const article = await getArticle(params.id);

    if (!article) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-secondary">
            <Header />
            <main className="flex-grow flex items-center justify-center py-12 px-4">
                <ArticleForm article={article} articleId={params.id} />
            </main>
            <Footer />
        </div>
    );
}
