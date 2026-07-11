import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "What We Believe",
  description: "Core beliefs at Cedarville Church of the Nazarene.",
};

const beliefStatements = [
  "One God-the Father, Son, and Holy Spirit.",
  "The Old and New Testament Scriptures, given by plenary inspiration, contain all truth necessary to faith and Christian living.",
  "Human beings are born with a fallen nature, and are, therefore, inclined to evil, and that continually.",
  "The finally impenitent are hopelessly and eternally lost.",
  "The atonement through Jesus Christ is for the whole human race; and that whosoever repents and believes on the Lord Jesus Christ is justified and regenerated and saved from the dominion of sin.",
  "Believers are to be sanctified wholly, subsequent to regeneration, through faith in the Lord Jesus Christ.",
  "The Holy Spirit bears witness to the new birth, and also to the entire sanctification of believers.",
  "Our Lord will return, the dead will be raised, and the final judgment will take place.",
] as const;

const articlesOfFaith = [
  {
    title: "The Triune God",
    text: "1. We believe in one eternally existent, infinite God, Sovereign Creator and Sustainer of the universe; that He only is God, holy in nature, attributes, and purpose. The God who is holy love and light is Triune in essential being, revealed as Father, Son, and Holy Spirit.",
  },
  {
    title: "Jesus Christ",
    text: "We believe in Jesus Christ, the Second Person of the Triune Godhead; that He was eternally one with the Father; that He became incarnate by the Holy Spirit and was born of the Virgin Mary, so that two whole and perfect natures, that is to say the Godhead and manhood, are thus united in one Person very God and very man, the God-man.",
  },
  {
    title: "The Holy Spirit",
    text: "We believe in the Holy Spirit, the Third Person of the Triune Godhead, that He is ever present and efficiently active in and with the Church of Christ, convincing the world of sin, regenerating those who repent and believe, sanctifying believers, and guiding into all truth as it is in Jesus.",
  },
  {
    title: "The Holy Scriptures",
    text: "We believe in the plenary inspiration of the Holy Scriptures, by which we understand the 66 books of the Old and New Testaments, given by divine inspiration, inerrantly revealing the will of God concerning us in all things necessary to our salvation, so that whatever is not contained therein is not to be enjoined as an article of faith.",
  },
  {
    title: "Sin, Original and Personal",
    text: "We believe that sin came into the world through the disobedience of our first parents, and death by sin. We believe that sin is of two kinds: original sin or depravity, and actual or personal sin.",
  },
  {
    title: "Atonement",
    text: "We believe that Jesus Christ, by His sufferings, by the shedding of His own blood, and by His death on the Cross, made a full atonement for all human sin, and that this Atonement is the only ground of salvation, and that it is sufficient for every individual of Adam's race.",
  },
  {
    title: "Prevenient Grace",
    text: "We believe that the grace of God through Jesus Christ is freely bestowed upon all people, enabling all who will to turn from sin to righteousness, believe on Jesus Christ for pardon and cleansing from sin, and follow good works pleasing and acceptable in His sight.",
  },
  {
    title: "Repentance",
    text: "We believe the Spirit of God gives to all who will repent the gracious help of penitence of heart and hope of mercy, that they may believe unto pardon and spiritual life.",
  },
  {
    title: "Justification, Regeneration, and Adoption",
    text: "We believe that justification is the gracious and judicial act of God by which He grants full pardon of all guilt and complete release from the penalty of sins committed, and acceptance as righteous, to all who believe on Jesus Christ and receive Him as Lord and Savior.",
  },
  {
    title: "Christian Holiness and Entire Sanctification",
    text: "We believe that sanctification is the work of God which transforms believers into the likeness of Christ. It is wrought by God's grace through the Holy Spirit in initial sanctification, or regeneration (simultaneous with justification), entire sanctification, and the continued perfecting work of the Holy Spirit culminating in glorification.",
  },
  {
    title: "The Church",
    text: "We believe in the Church, the community that confesses Jesus Christ as Lord, the covenant people of God made new in Christ, the Body of Christ called together by the Holy Spirit through the Word.",
  },
  {
    title: "Baptism",
    text: "We believe that Christian baptism, commanded by our Lord, is a sacrament signifying acceptance of the benefits of the atonement and incorporation into the Body of Christ.",
  },
  {
    title: "The Lord's Supper",
    text: "We believe that the Communion Supper instituted by our Lord and Savior Jesus Christ is a sacrament, proclaiming His life, sufferings, sacrificial death, resurrection, and the hope of His coming again.",
  },
  {
    title: "Divine Healing",
    text: "We believe in the biblical doctrine of divine healing and urge our people to offer the prayer of faith for the healing of the sick. We also believe God heals through the means of medical science.",
  },
  {
    title: "The Second Coming of Christ",
    text: "We believe that at the end of the age the Lord Jesus Christ will be revealed as Lord of all. He will come again in glory and power to establish fully the kingdom of God that He proclaimed and initiated in His life and ministry.",
  },
  {
    title: "Resurrection, Judgment, and Destiny",
    text: "We believe in the resurrection of the dead, that the bodies both of the just and of the unjust shall be raised to life and united with their spirits-they that have done good, unto the resurrection of life; and they that have done evil, unto the resurrection of damnation.",
  },
] as const;

const articleReferences = [
  "(Genesis 1; Leviticus 19:2; Deuteronomy 6:4-5; Isaiah 5:16; 6:1-7; 40:18-31; Matthew 3:16-17; 28:19-20; John 14:6-27; 1 Corinthians 8:6; 2 Corinthians 13:14; Galatians 4:4-6; Ephesians 2:13-18; 1 John 1:5; 4:8)",
  "(Matthew 1:20-25; 16:15-16; Luke 1:26-35; John 1:1-18; Acts 2:22-36; Romans 8:3, 32-34; Galatians 4:4-5; Philippians 2:5-11; Colossians 1:12-22; 1 Timothy 6:14-16; Hebrews 1:1-5; 7:22-28; 9:24-28; 1 John 1:1-3; 4:2-3, 15)",
  "(John 7:39; 14:15-18, 26; 16:7-15; Acts 2:33; 15:8-9; Romans 8:1-27; Galatians 3:1-14; 4:6; Ephesians 3:14-21; 1 Thessalonians 4:7-8; 2 Thessalonians 2:13; 1 Peter 1:2; 1 John 3:24; 4:13)",
  "(Luke 24:44-47; John 10:35; 1 Corinthians 15:3-4; 2 Timothy 3:15-17; 1 Peter 1:10-12; 2 Peter 1:20-21)",
  "(Original sin: Genesis 3; 6:5; Job 15:14; Psalm 51:5; Jeremiah 17:9-10; Mark 7:21-23; Romans 1:18-25; 5:12-14; 7:1-8:9; 1 Corinthians 3:1-4; Galatians 5:16-25; 1 John 1:7-8) (Personal sin: Matthew 22:36-40 {with 1 John 3:4}; John 8:34-36; 16:8-9; Romans 3:23; 6:15-23; 8:18-24; 14:23; 1 John 1:9-2:4; 3:7-10)",
  "(Isaiah 53:5-6, 11; Mark 10:45; Luke 24:46-48; John 1:29; 3:14-17; Acts 4:10-12; Romans 3:21-26; 4:17-25; 5:6-21; 1 Corinthians 6:20; 2 Corinthians 5:14-21; Galatians 1:3-4; 3:13-14; Colossians 1:19-23; 1 Timothy 2:3-6; Titus 2:11-14; Hebrews 2:9; 9:11-14; 13:12; 1 Peter 1:18-21; 2:19-25; 1 John 2:1-2)",
  "(Godlikeness and moral responsibility: Genesis 1:26-27; 2:16-17; Deuteronomy 28:1-2; 30:19; Joshua 24:15; Psalm 8:3-5; Isaiah 1:8-10; Jeremiah 31:29-30; Ezekiel 18:1-4; Micah 6:8; Romans 1:19-20; 2:1-16; 14:7-12; Galatians 6:7-8) (Natural inability: Job 14:4; 15:14; Psalms 14:1-4; 51:5; John 3:6a; Romans 3:10-12; 5:12-14, 20a; 7:14-25) (Free grace and works of faith: Ezekiel 18:25-26; John 1:12-13; 3:6b; Acts 5:31; Romans 5:6-8, 18; 6:15-16, 23; 10:6-8; 11:22; 1 Corinthians 2:9-14; 10:1-12; 2 Corinthians 5:18-19; Galatians 5:6; Ephesians 2:8-10; Philippians 2:12-13; Colossians 1:21-23; 2 Timothy 4:10a; Titus 2:11-14; Hebrews 2:1-3; 3:12-15; 6:4-6; 10:26-31; James 2:18-22; 2 Peter 1:10-11; 2:20-22)",
  "(2 Chronicles 7:14; Psalms 32:5-6; 51:1-17; Isaiah 55:6-7; Jeremiah 3:12-14; Ezekiel 18:30-32; 33:14-16; Mark 1:14-15; Luke 3:1-14; 13:1-5; 18:9-14; Acts 2:38; 3:19; 5:31; 17:30-31; 26:16-18; Romans 2:4; 2 Corinthians 7:8-11; 1 Thessalonians 1:9; 2 Peter 3:9)",
  "(Luke 18:14; John 1:12-13; 3:3-8; 5:24; Acts 13:39; Romans 1:17; 3:21-26, 28; 4:5-9, 17-25; 5:1, 16-19; 6:4; 7:6; 8:1, 15-17; 1 Corinthians 1:30; 6:11; 2 Corinthians 5:17-21; Galatians 2:16-21; 3:1-14, 26; 4:4-7; Ephesians 1:6-7; 2:1, 4-5; Philippians 3:3-9; Colossians 2:13; Titus 3:4-7; 1 Peter 1:23; 1 John 1:9; 3:1-2, 9; 4:7; 5:1, 9-13, 18)",
  "(Jeremiah 31:31-34; Ezekiel 36:25-27; Malachi 3:2-3; Matthew 3:11-12; Luke 3:16-17; John 7:37-39; 14:15-23; 17:6-20; Acts 1:5; 2:1-4; 15:8-9; Romans 6:11-13, 19; 8:1-4, 8-14; 12:1-2; 2 Corinthians 6:14-7:1; Galatians 2:20; 5:16-25; Ephesians 3:14-21; 5:17-18, 25-27; Philippians 3:10-15; Colossians 3:1-17; 1 Thessalonians 5:23-24; Hebrews 4:9-11; 10:10-17; 12:1-2; 13:12; 1 John 1:7, 9) (Christian perfection, perfect love: Deuteronomy 30:6; Matthew 5:43-48; 22:37-40; Romans 12:9-21; 13:8-10; 1 Corinthians 13; Philippians 3:10-15; Hebrews 6:1; 1 John 4:17-18)",
  "(Exodus 19:3; Jeremiah 31:33; Matthew 8:11; 10:7; 16:13-19, 24; 18:15-20; 28:19-20; John 17:14-26; 20:21-23; Acts 1:7-8; 2:32-47; 6:1-2; 13:1; 14:23; Romans 2:28-29; 4:16; 10:9-15; 11:13-32; 12:1-8; 15:1-3; 1 Corinthians 3:5-9; 7:17; 11:1, 17-33; 12:3, 12-31; 14:26-40; 2 Corinthians 5:11-6:1; Galatians 5:6, 13-14; 6:1-5, 15; Ephesians 4:1-17; 5:25-27; Philippians 2:1-16; 1 Thessalonians 4:1-12; 1 Timothy 4:13; Hebrews 10:19-25; 1 Peter 1:1-2, 13; 2:4-12, 21; 4:1-2, 10-11; 1 John 4:17; Jude 24; Revelation 5:9-10)",
  "(Matthew 3:1-7; 28:16-20; Acts 2:37-41; 8:35-39; 10:44-48; 16:29-34; 19:1-6; Romans 6:3-4; Galatians 3:26-28; Colossians 2:12; 1 Peter 3:18-22)",
  "(Exodus 12:1-14; Matthew 26:26-29; Mark 14:22-25; Luke 22:17-20; John 6:28-58; 1 Corinthians 10:14-21; 11:23-32)",
  "(2 Kings 5:1-19; Psalm 103:1-5; Matthew 4:23-24; 9:18-35; John 4:46-54; Acts 5:12-16; 9:32-42; 14:8-15; 1 Corinthians 12:4-11; 2 Corinthians 12:7-10; James 5:13-16)",
  "(Deuteronomy 10:17; Isaiah 11:1-9; 65:17-25; 66:22-23; Matthew 6:9-13, 24; 25:31-46; 28:18; Luke 4:18-21; John 14:1-3; Acts 1:9-11; 3:21; Romans 8:18-22; 1 Corinthians 13:12-13; 15:24-25, 28; 2 Corinthians 5:17; Philippians 1:6; 2:5-11; 3:20-21; 1 Thessalonians 4:13-18; Titus 2:11-14; Hebrews 9:26-28; 2 Peter 3:3-15; Revelation 1:7-8; 12:10-12; 21:1-8; 22:7-20)",
  "(Genesis 18:25; 1 Samuel 2:10; Psalm 50:6; Isaiah 26:19; Daniel 12:2-3; Matthew 25:31-46; Mark 9:43-48; Luke 16:19-31; 20:27-38; John 3:16-18; 5:25-29; 11:21-27; Acts 17:30-31; Romans 2:1-16; 14:7-12; 1 Corinthians 15:12-58; 2 Corinthians 5:10; 2 Thessalonians 1:5-10; Revelation 20:11-15; 22:1-15)",
] as const;

const coreValuesSections = [
  {
    title: "A CHRISTIAN PEOPLE",
    icon: "/icons/core-values/christianIcon.svg",
    color: "var(--primary)",
    paragraphs: [
      "As members of the Church Universal, we join with all true believers in proclaiming the Lordship of Jesus Christ and in affirming the historic Trinitarian creeds and beliefs of the Christian faith. We value our Wesleyan-Holiness heritage and believe it to be a way of understanding the faith that is true to Scripture, reason, tradition, and experience.",
      "We are united with all believers in proclaiming the Lordship of Jesus Christ. We believe that in divine love God offers to all people forgiveness of sins and restored relationship. In being reconciled to God, we believe that we are also to be reconciled to one another, loving each other as we have been loved by God and forgiving each other as we have been forgiven by God. We believe that our life together is to exemplify the character of Christ. We look to Scripture as the primary source of spiritual truth confirmed by reason, tradition, and experience.",
      "Jesus Christ is the Lord of the Church, which, as the Nicene Creed tells us, is one, holy, universal, and apostolic. In Jesus Christ and through the Holy Spirit, God the Father offers forgiveness of sin and reconciliation to all the world. Those who respond to God's offer in faith become the people of God. Having been forgiven and reconciled in Christ, we forgive and are reconciled to one another. In this way, we are Christ's Church and Body and reveal the unity of that Body. As the one Body of Christ, we have one Lord, one faith, one baptism. We affirm the unity of Christ's Church and strive in all things to preserve it. (Ephesians 4:5, 3).",
    ],
  },
  {
    title: "A HOLINESS PEOPLE",
    icon: "/icons/core-values/holinessIcon.svg",
    color: "var(--secondary)",
    paragraphs: [
      "God, who is holy, calls us to a life of holiness. We believe that the Holy Spirit seeks to do in us a second work of grace, called by various terms including entire sanctification and baptism with the Holy Spirit-cleansing us from all sin, renewing us in the image of God, empowering us to love God with our whole heart, soul, mind, and strength, and our neighbors as ourselves, and producing in us the character of Christ. Holiness in the life of believers is most clearly understood as Christlikeness.",
      "Because we are called by Scripture and drawn by grace to worship God and to love Him with our whole heart, soul, mind, and strength, and our neighbors as ourselves, we commit ourselves fully and completely to God, believing that we can be sanctified wholly, as a second crisis experience. We believe that the Holy Spirit convicts, cleanses, fills, and empowers us as the grace of God transforms us day by day into a people of love, spiritual discipline, ethical and moral purity, compassion, and justice. It is the work of the Holy Spirit that restores us in the image of God and produces in us the character of Christ.",
      "We believe in God the Father, the Creator, who calls into being what does not exist. We once were not, but God called us into being, made us for himself, and fashioned us in His own image. We have been commissioned to bear the image of God: I am the LORD . . . your God; therefore be holy, because I am holy.",
    ],
  },
  {
    title: "A MISSIONAL PEOPLE",
    icon: "/icons/core-values/missionalIcon.svg",
    color: "var(--accent)",
    paragraphs: [
      "We are a sent people, responding to the call of Christ and empowered by the Holy Spirit to go into all the world, witnessing to the Lordship of Christ and participating with God in the building of the Church and the extension of His kingdom (Matthew 28:19-20; 2 Corinthians 6:1).",
      "Our mission begins in worship, ministers to the world in evangelism and compassion, encourages believers toward Christian maturity through discipleship, and prepares women and men for Christian service through Christian higher education.",
    ],
  },
] as const;

const doveBulletStyle = {
  backgroundColor: "var(--secondary)",
  WebkitMaskImage: "url(/icons/core-values/simpleDoveIcon.svg)",
  maskImage: "url(/icons/core-values/simpleDoveIcon.svg)",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
} as const;

export default function BeliefsPage() {
  return (
    <>
      <PageHero
        title="What We Believe"
        subtitle="Our beliefs are rooted in Scripture, centered on Jesus Christ, and lived through the power of the Holy Spirit."
        image="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1900&q=80"
      />

      <section className="bg-primary/5 py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <div className="border border-border/70 bg-background/80 p-5 md:p-6">
            <p className="text-center text-2xl font-bold uppercase tracking-[0.16em] text-secondary md:text-3xl">
              Essentials
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <a
                href="#mission"
                className="group flex min-h-24 items-center gap-3 border border-border/70 bg-background/80 px-5 py-5 text-foreground transition-colors hover:border-secondary/70 hover:bg-secondary/10 md:py-6"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/15" aria-hidden="true">
                  <span className="block h-5 w-5" style={doveBulletStyle} />
                </span>
                <span className="font-heading text-lg leading-tight">Statement of Mission</span>
              </a>
              <a
                href="#beliefs"
                className="group flex min-h-24 items-center gap-3 border border-border/70 bg-background/80 px-5 py-5 text-foreground transition-colors hover:border-secondary/70 hover:bg-secondary/10 md:py-6"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/15" aria-hidden="true">
                  <span className="block h-5 w-5" style={doveBulletStyle} />
                </span>
                <span className="font-heading text-lg leading-tight">Statement of Beliefs</span>
              </a>
              <a
                href="#core-values"
                className="group flex min-h-24 items-center gap-3 border border-border/70 bg-background/80 px-5 py-5 text-foreground transition-colors hover:border-secondary/70 hover:bg-secondary/10 md:py-6"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/15" aria-hidden="true">
                  <span className="block h-5 w-5" style={doveBulletStyle} />
                </span>
                <span className="font-heading text-lg leading-tight">Core Values</span>
              </a>
              <a
                href="#articles"
                className="group flex min-h-24 items-center gap-3 border border-border/70 bg-background/80 px-5 py-5 text-foreground transition-colors hover:border-secondary/70 hover:bg-secondary/10 md:py-6"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/15" aria-hidden="true">
                  <span className="block h-5 w-5" style={doveBulletStyle} />
                </span>
                <span className="font-heading text-lg leading-tight">Articles of Faith</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <Card className="rounded-none border border-border/70 bg-background/80 shadow-none">
          <CardHeader className="px-6 pt-6 md:px-8 md:pt-8">
            <p className="text-center text-2xl font-bold uppercase tracking-[0.16em] text-secondary md:text-3xl">
              Statement of Mission
            </p>
            <CardTitle className="text-center font-heading text-3xl">To make Christlike disciples in the nations.</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 px-6 pb-6 text-muted-foreground md:px-8 md:pb-8">
            <p>
              We are a Great Commission church. As a global community of faith, <strong>WE ARE COMMISSIONED TO TAKE THE GOOD NEWS OF LIFE IN JESUS CHRIST TO PEOPLE EVERYWHERE</strong>
              and to spread the message of scriptural holiness across the lands.
            </p>
            <p>
              <strong>THE CHURCH OF THE NAZARENE BONDS TOGETHER INDIVIDUALS</strong> who have made Jesus Christ Lord of their lives, sharing in Christian fellowship, and seeking to strengthen each other in faith development through worship, preaching, training, and service to others.
            </p>
            <p>
              We strive to express the compassion of Jesus Christ to all persons along with our personal commitment to Christlike living. While the primary motive of the church is to glorify God, <strong>WE ALSO ARE CALLED TO ACTIVELY PARTICIPATE IN HIS MISSION – RECONCILING THE WORLD TO HIMSELF</strong>.
            </p>
            <p>
              The statement of mission contains historical essentials of our mission: <strong>EVANGELISM, SANCTIFICATION, DISCIPLESHIP, COMPASSION</strong>. The essence of holiness is Christlikeness. Nazarenes are becoming a sent people-into homes, work places, communities, and villages as well as other cities and countries. Missionaries are now sent from all regions of the world. <strong>GOD CONTINUES CALLING ORDINARY PEOPLE TO DO EXTRAORDINARY THINGS</strong> made possible by the person of the Holy Spirit.
            </p>
          </CardContent>
          </Card>
        </div>
      </section>

      <section id="beliefs" className="bg-secondary/8 py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <div className="mb-5">
          <p className="text-center text-2xl font-bold uppercase tracking-[0.16em] text-secondary md:text-3xl">
            Statement of Beliefs
          </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
          {beliefStatements.map((statement) => (
            <Card key={statement} className="h-full rounded-none border border-border/70 bg-background/80 shadow-none">
              <CardContent className="flex h-full items-center gap-3 p-5">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary/15" aria-hidden="true">
                  <span className="block h-5 w-5" style={doveBulletStyle} />
                </span>
                <p className="text-base leading-relaxed text-muted-foreground">{statement}</p>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </section>

      <section id="core-values" className="bg-primary/5 py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <div className="mb-8">
          <p className="text-center text-2xl font-bold uppercase tracking-[0.16em] text-secondary md:text-3xl">
            Core Values
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-center font-heading text-base font-medium leading-relaxed text-foreground md:text-lg">
            Our Core Values are the essence of our identity and support the vision of our denomination and help shape our culture.
          </p>
          <div className="mt-5 flex justify-center">
            <Button asChild>
              <Link href="https://resources.nazarene.org/index.php/s/wHofpSptnT2Gprx" target="_blank" rel="noreferrer">
                Download Core Values Document
              </Link>
            </Button>
          </div>
          </div>

          <div className="space-y-6">
            {coreValuesSections.map((section) => (
              <article key={section.title} className="border border-border/70 bg-background/80 p-6 md:p-8">
                <div className="mb-4 flex items-center gap-4">
                  <span
                    className="block h-14 w-14 shrink-0"
                    style={{
                      backgroundColor: section.color,
                      WebkitMaskImage: `url(${section.icon})`,
                      maskImage: `url(${section.icon})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                    }}
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-2xl text-primary md:text-3xl">{section.title}</h3>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <Card className="rounded-none border border-border/70 bg-background/80 shadow-none">
          <CardHeader className="px-6 pt-6 md:px-8 md:pt-8">
            <p className="text-center text-2xl font-bold uppercase tracking-[0.16em] text-secondary md:text-3xl">
              Articles of Faith
            </p>
            <CardTitle className="text-center font-heading text-3xl">Our Doctrinal Foundations</CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6 md:px-8 md:pb-8">
            <div className="space-y-4">
              {articlesOfFaith.map((item, index) => (
                <details
                  key={item.title}
                  open={index === 0}
                  className="group overflow-hidden border border-border/70 bg-background/80"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left marker:content-none md:px-6 md:py-5">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/15" aria-hidden="true">
                        <span className="block h-5 w-5" style={doveBulletStyle} />
                      </span>
                      <span className="font-heading text-lg leading-tight text-foreground md:text-xl">{item.title}</span>
                    </div>
                    <span className="shrink-0 text-xl font-semibold text-secondary transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="border-t border-border/60 px-5 py-4 md:px-6 md:py-5">
                    <p className="text-base leading-relaxed text-muted-foreground">{item.text}</p>
                    <p className="mt-3 text-sm italic leading-relaxed text-muted-foreground">
                      {articleReferences[index]}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground/80">
                      Official source: Church of the Nazarene, What We Believe / Articles of Faith.
                    </p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="https://nazarene.org/resources/articles-of-faith/" target="_blank" rel="noreferrer">
                  Download Articles of Faith
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://nazarene.org/what-we-believe/" target="_blank" rel="noreferrer">
                  Read Full Denominational Resource
                </Link>
              </Button>
            </div>
          </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
