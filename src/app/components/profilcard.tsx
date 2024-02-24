'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface UserData {
  avatar_url: string;
  name: string;
  html_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

interface ProfileCardProps {
  username: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ username }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-md p-6 w-96">
      <div className="flex items-center justify-between mb-4">
        <Image src={userData.avatar_url} width={300} height={300} alt={`${userData.name}'s avatar`} className="w-12 h-12 rounded-full" />
        <h2 className="text-xl font-semibold">{userData.name}</h2>
        <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-[#FD5956] hover:underline">View Profile</a>
      </div>
      <p className="text-gray-600 mb-4">{userData.bio}</p>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Followers</h3>
          <p>{userData.followers}</p>
        </div>
        <div>
          <h3 className="font-semibold">Following</h3>
          <p>{userData.following}</p>
        </div>
        <div>
          <h3 className="font-semibold">Public Repos</h3>
          <p>{userData.public_repos}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
