import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AthleteWithSport } from '@/lib/athlete';
import { formatFollowers } from '@/lib/utils';
import { GoPerson } from 'react-icons/go';

interface AthleteCardProps {
  athlete: AthleteWithSport;
}

export function AthleteCard({ athlete }: AthleteCardProps) {
  return (
    <Card className="w-full group">
      <CardHeader className="flex items-start justify-between p-4 flex-row over flow-hidden gap-2">
        <div className="flex items-center space-x-4 truncate">
          <Avatar className="border-2 border-black w-14 h-14">
            {athlete.instagramImageUrl && (
              <AvatarImage src={athlete.instagramImageUrl} alt={athlete.name} />
            )}
          </Avatar>
          <div className="truncate">
            <CardTitle className="text-lg font-bold truncate">
              {athlete.instagramName}
            </CardTitle>
             <CardDescription className="text-sm truncate">
              {athlete.sport?.name}
            </CardDescription> 
          </div>
        </div>
        <div className="font-medium flex items-center gap-1">
          <GoPerson className="w-5 h-5" />
          {formatFollowers(athlete.instagramFollowers!) || 0}
        </div>
      </CardHeader>
    </Card>
  );
}
