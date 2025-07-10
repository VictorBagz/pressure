
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
import { Shield, Users } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Admin Dashboard | RugbyCare UG",
    description: "Manage and track registered players for the Athletes Medical Fund.",
};

// Mock data - replace with actual data fetching later
const players = [
    { name: "Jordan Kinyera", contact: "0781234567", rugbyClub: "Black Pirates", nextOfKinContact: "0751234567" },
    { name: "Ivan Magomu", contact: "0782345678", rugbyClub: "Black Pirates", nextOfKinContact: "0752345678" },
    { name: "Timothy Kisiga", contact: "0783456789", rugbyClub: "Black Pirates", nextOfKinContact: "0753456789" },
    { name: "Michael Wokorach", contact: "0771234567", rugbyClub: "Heathens", nextOfKinContact: "0791234567" },
    { name: "Aaron Ofoyrwoth", contact: "0772345678", rugbyClub: "Heathens", nextOfKinContact: "0792345678" },
    { name: "Asuman Mugerwa", contact: "0773456789", rugbyClub: "Kobs", nextOfKinContact: "0793456789" },
    { name: "Pius Ogena", contact: "0774567890", rugbyClub: "Kobs", nextOfKinContact: "0794567890" },
    { name: "Solomon Okia", contact: "0775678901", rugbyClub: "Buffaloes", nextOfKinContact: "0795678901" },
];

const groupPlayersByClub = (playerList: typeof players) => {
    return playerList.reduce((acc, player) => {
        const { rugbyClub } = player;
        if (!acc[rugbyClub]) {
            acc[rugbyClub] = [];
        }
        acc[rugbyClub].push(player);
        return acc;
    }, {} as Record<string, typeof players>);
};

export default function AdminDashboard() {
    const groupedPlayers = groupPlayersByClub(players);

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
                            <Accordion type="single" collapsible className="w-full">
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
                                                            <TableRow key={player.name}>
                                                                <TableCell>
                                                                    <div className="flex items-center space-x-3">
                                                                        <Avatar>
                                                                            <AvatarFallback>
                                                                                {player.name.split(' ').map(n => n[0]).join('')}
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
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
