
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Users, AlertTriangle } from "lucide-react";
import type { Metadata } from 'next';
import { firestore } from '@/lib/firebase';
import { unstable_noStore as noStore } from 'next/cache';

export const metadata: Metadata = {
    title: "Admin Dashboard | RugbyCare UG",
    description: "Manage and track registered players for the Athletes Medical Fund.",
};

interface Player {
    id: string;
    name: string;
    contact: string;
    rugbyClub: string;
    nextOfKinContact: string;
}

async function getPlayers(): Promise<Player[]> {
    noStore(); 
    try {
        const playersSnapshot = await firestore.collection('players').orderBy('registeredAt', 'desc').get();
        if (playersSnapshot.empty) {
            console.log('No players found in Firestore.');
            return [];
        }
        return playersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Player));
    } catch (error) {
        console.error("Error fetching players:", error);
        return [];
    }
}

const groupPlayersByClub = (playerList: Player[]) => {
    return playerList.reduce((acc, player) => {
        const { rugbyClub } = player;
        if (!acc[rugbyClub]) {
            acc[rugbyClub] = [];
        }
        acc[rugbyClub].push(player);
        return acc;
    }, {} as Record<string, Player[]>);
};

export default async function AdminDashboard() {
    const players = await getPlayers();
    const groupedPlayers = groupPlayersByClub(players);
    const hasPlayers = players.length > 0;

    return (
        <div className="flex flex-col min-h-screen bg-secondary">
            <Header />
            <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Card className="overflow-hidden shadow-2xl">
                        <CardHeader className="bg-card">
                            <div className="flex items-center space-x-4">
                                <Users className="h-10 w-10 text-primary" />
                                <div>
                                    <CardTitle className="text-3xl font-bold text-primary">Admin Dashboard</CardTitle>
                                    <CardDescription>Track and manage registered players by their club.</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            {hasPlayers ? (
                                <Accordion type="single" collapsible className="w-full" defaultValue={Object.keys(groupedPlayers)[0]}>
                                    {Object.entries(groupedPlayers).map(([club, clubPlayers]) => (
                                        <AccordionItem key={club} value={club}>
                                            <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
                                                <div className="flex items-center space-x-3">
                                                    <Shield className="h-5 w-5 text-primary/80" />
                                                    <span className="font-bold text-lg text-primary">{club}</span>
                                                    <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-bold">
                                                        {clubPlayers.length} Players
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="bg-card">
                                                <div className="overflow-x-auto">
                                                    <Table>
                                                        <TableHeader>
                                                            <TableRow>
                                                                <TableHead className="w-[40%]">Player Name</TableHead>
                                                                <TableHead>Contact</TableHead>
                                                                <TableHead>Next of Kin Contact</TableHead>
                                                            </TableRow>
                                                        </TableHeader>
                                                        <TableBody>
                                                            {clubPlayers.map((player) => (
                                                                <TableRow key={player.id}>
                                                                    <TableCell>
                                                                        <div className="flex items-center space-x-3">
                                                                            <Avatar>
                                                                                <AvatarFallback>
                                                                                    {player.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                                                                                </AvatarFallback>
                                                                            </Avatar>
                                                                            <span className="font-medium">{player.name}</span>
                                                                        </div>
                                                                    </TableCell>
                                                                    <TableCell>{player.contact}</TableCell>
                                                                    <TableCell>{player.nextOfKinContact}</TableCell>
                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            ) : (
                                <div className="text-center py-20 px-6">
                                    <AlertTriangle className="mx-auto h-12 w-12 text-muted-foreground" />
                                    <h3 className="mt-4 text-lg font-semibold text-primary">No Players Registered Yet</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        As players register through the form, they will appear here.
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
