import {
  Baby,
  BookOpen,
  CalendarDays,
  Compass,
  HandHelping,
  Heart,
  Music,
  Sparkles,
} from "lucide-react";

export const churchInfo = {
  name: "Cedarville Church of the Nazarene",
  shortName: "Cedarville Church of the Nazarene",
  addressLine1: "125 S Main St",
  addressLine2: "Cedarville, Ohio 45314",
  phone: "(540) 940-7449",
  email: "info@cedarvillenaz.org",
  sundaySchool: "9:30 AM",
  sundayWorship: "10:30 AM",
  coordinates: {
    lat: 39.7443,
    lng: -83.8115,
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "What We Believe", href: "/beliefs" },
  { label: "Ministries", href: "/ministries" },
  { label: "Leadership Team", href: "/about" },
  { label: "Calendar", href: "/calendar" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const quickInfo = [
  {
    title: "Service Times",
    lines: [
      { label: "Sunday School", value: churchInfo.sundaySchool },
      { label: "Sunday Worship", value: churchInfo.sundayWorship },
    ],
    icon: CalendarDays,
  },
  {
    title: "Kids Ministry",
    titleSuffix: "Nursery - 12 years old",
    lines: [
      { label: "Sunday School", value: churchInfo.sundaySchool },
      { label: "Sunday Worship", value: churchInfo.sundayWorship },
    ],
    icon: Baby,
  },
  {
    title: "Find Us",
    lines: [
      { label: churchInfo.addressLine1 },
      { label: churchInfo.addressLine2 },
    ],
    icon: Compass,
  },
  {
    title: "You Belong Here",
    lines: [{ label: "No matter where you are", value: "on your journey." }],
    icon: Heart,
  },
] as const;

export const ministries = [
  {
    slug: "kids-ministry",
    title: "Kids Ministry",
    description:
      "Helping children know Jesus through Bible teaching, worship, fun, and friendships.",
    icon: Baby,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "youth-ministry",
    title: "Youth Ministry",
    description:
      "Creating space for students to ask real questions, build friendships, and follow Jesus with confidence.",
    icon: Sparkles,
    image: "/images/Youth.png",
  },
  {
    slug: "adult-discipleship",
    title: "Adult Discipleship",
    description:
      "Growing together through Bible studies, prayer groups, and Christ-centered relationships.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1517486430290-35657bdcef51?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "missions-outreach",
    title: "Bridges of Hope",
    description:
      "Serving neighbors experiencing homelessness through compassionate outreach, practical support, and Christ-centered hope.",
    icon: HandHelping,
    image: "/images/prison_ministry.png",
  },
  {
    slug: "worship-prayer",
    title: "Worship & Prayer",
    description:
      "Gathering weekly to worship wholeheartedly and seek the Holy Spirit through prayer.",
    icon: Music,
    image:
      "https://images.pexels.com/photos/36425622/pexels-photo-36425622.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    slug: "men-on-mission",
    title: "Men of Faith",
    description:
      "Men growing in Christ through Bible study, brotherhood, practical service, and faithful leadership at home, church, and in the community.",
    icon: Compass,
    image: "/images/Men.jpg",
  },
] as const;

export const beliefs = [
  {
    title: "Scripture",
    description:
      "The Bible is God's inspired Word and our authority for faith and life.",
  },
  {
    title: "Grace",
    description: "Salvation is through Jesus Christ alone.",
  },
  {
    title: "Holiness",
    description:
      "The Holy Spirit transforms believers into Christlike disciples.",
  },
] as const;

export const upcomingEvents = [
  {
    title: "Memorial Day Prayer",
    date: "May 27",
    time: "7:00 PM",
    location: "Sanctuary",
  },
  {
    title: "Church Picnic",
    date: "June 8",
    time: "1:00 PM",
    location: "Community Park",
  },
  {
    title: "Vacation Bible School",
    date: "July 15-19",
    time: "6:00 PM",
    location: "Kids Wing",
  },
  {
    title: "Community Outreach",
    date: "August 3",
    time: "10:00 AM",
    location: "Downtown Cedarville",
  },
] as const;

export const monthlyCalendar = [
  { day: 1, label: "Prayer Night" },
  { day: 4, label: "Youth Hangout" },
  { day: 7, label: "Sunday Worship" },
  { day: 12, label: "Bible Study" },
  { day: 15, label: "Church Picnic" },
  { day: 19, label: "VBS Planning" },
  { day: 22, label: "Worship Night" },
  { day: 26, label: "Community Serve" },
  { day: 29, label: "Family Prayer" },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/cedarnaz" },
  { label: "Instagram", href: "https://www.instagram.com/cedarville.naz/" },
  { label: "YouTube", href: "https://www.youtube.com/@CedarvilleChurchofNazarene" },
] as const;

export const ministryPageCopy: Record<
  string,
  {
    summary: string;
    details: string[];
    galleryTitle?: string;
    galleryDescription?: string;
    galleryImages?: { src: string; alt: string }[];
  }
> = {
  "kids-ministry": {
    summary:
      "Our Kids Ministry partners with families to help children discover who Jesus is in age-appropriate and joyful ways.",
    details: [
      "Safe classrooms with trained volunteers",
      "Interactive Bible teaching and worship",
      "Weekly opportunities to build friendships",
    ],
  },
  "youth-ministry": {
    summary:
      "Youth Ministry helps middle and high school students grow in faith while navigating real life together.",
    details: [
      "Weekly gatherings for worship and discussion",
      "Mentorship from trusted adult leaders",
      "Service projects and retreats",
    ],
    galleryTitle: "Youth Events",
    galleryDescription:
      "Photos from youth gatherings, hangouts, and special events can be featured here.",
    galleryImages: [
      {
        src: "/images/Youth.png",
        alt: "Students together at a youth ministry gathering",
      },
    ],
  },
  "adult-discipleship": {
    summary:
      "Adult Discipleship is where faith becomes practical through Scripture, community, and prayer.",
    details: [
      "Small groups for every season of life",
      "Bible studies focused on transformation",
      "Prayer gatherings for church and community",
    ],
  },
  "missions-outreach": {
    summary:
      "Bridges of Hope equips our church family to serve neighbors experiencing homelessness through practical care, faithful presence, and gospel-centered hope.",
    details: [
      "Outreach that meets practical needs with dignity and compassion",
      "Prayer, encouragement, and Christ-centered relationship building",
      "Support opportunities for individuals and families facing housing instability",
    ],
  },
  "worship-prayer": {
    summary:
      "Worship & Prayer is the heartbeat of our church as we gather to glorify God and seek His presence.",
    details: [
      "Sunday worship team opportunities",
      "Weekly prayer gatherings",
      "Special nights of worship throughout the year",
    ],
  },
  "men-on-mission": {
    summary:
      "Men of Faith calls men to follow Jesus with courage, integrity, and a servant heart in every season of life.",
    details: [
      "Bible study and honest conversation",
      "Hands-on service projects for church and community",
      "Mentorship and spiritual leadership encouragement",
    ],
  },
};
