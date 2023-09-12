import {
  AiFillCompass,
  AiFillHeart,
  AiFillHome,
  AiFillMessage,
  AiFillPlusCircle,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlinePlusCircle,
  AiOutlineSearch,
 
  
} from "react-icons/ai";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";
 import { CgProfile } from "react-icons/cg";


export const mainu = [
  {
    title: "Home",
    icon: <AiOutlineHome className="text-2xl mr-5"></AiOutlineHome>,
    iactiveIcon: <AiFillHome className="text-2xl mr-5"></AiFillHome>,
  },
  {
    title: "Search",
    icon: <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>,
    activeIcon: <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>,
  },
  {
    title: "Explore",
    icon: <AiOutlineCompass className="text-2xl mr-5"></AiOutlineCompass>,
    activeIcon: <AiFillCompass className="text-2xl mr-5"></AiFillCompass>,
  },
  {
    title: "Reels",
    icon: <RiVideoLine className="text-2xl mr-5"></RiVideoLine>,
    activeIcon: <RiVideoFill className="text-2xl mr-5"></RiVideoFill>,
  },
  {
    title: "Message",
    icon: <AiOutlineMessage className="text-2xl mr-5"></AiOutlineMessage>,
    activeIcon: <AiFillMessage className="text-2xl mr-5"></AiFillMessage>,
  },
 {
    title: "Create",
    icon: <AiOutlinePlusCircle className="text-2xl mr-5"></AiOutlinePlusCircle>,
    activeIcon: <AiFillPlusCircle className="text-2xl mr-5"></AiFillPlusCircle>,
  },  
  
   {
    title: "Notification",
    icon: <AiOutlineHeart className="text-2xl mr-5"></AiOutlineHeart>,
    iactiveIcon: <AiFillHeart className="text-2xl mr-5"></AiFillHeart>,
  },
  {
    title: "Profile",
    icons: <CgProfile className="text-2xl mr-5"></CgProfile>,
    activeIcon: <CgProfile className="text-2xl mr-5"></CgProfile>,
  },
];
