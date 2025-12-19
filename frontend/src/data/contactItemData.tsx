import {MailIcon, MapPinIcon, PhoneIcon} from "lucide-react";
import {ContactsCards} from "@/types/components";

export const contactItemsData: ContactsCards = [
    {
        icon: MailIcon,
        contactItemTitle: "Email",
        contactItemDescription: "maciek.korsakowski@gmail.com"
    },
    {
        icon: PhoneIcon,
        contactItemTitle: "Phone",
        contactItemDescription: "+48 123 456 789"
    },
    {
        icon: MapPinIcon,
        contactItemTitle: "Location",
        contactItemDescription: "Warsaw, Poland"
    }
];