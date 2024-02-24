
import ProfileCard from "../components/profilcard";

export default function Team() {
    const teamMembers = ['mibanas', 'RedaDevJs', 'laitoussyassine', 'theziko1', 'yns-jns']

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-16">
            {teamMembers.map((username, index) => (
                <ProfileCard key={index} username={username} />
            ))}
        </div>
    );
};
