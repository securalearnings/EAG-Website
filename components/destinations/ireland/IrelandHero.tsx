'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function IrelandHero() {
  return (
    <section className="relative min-h-[80vh] w-full">
      <Image
        src="https://study-eu.s3.eu-west-1.amazonaws.com/uploads/image/path/310/wide_fullhd_ireland-tcd-campanile.jpg" // Replace with a scenic view of Ireland's landscapes
        alt="Study in Ireland"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40">
        <Container className="flex h-full items-center">
          <div className="max-w-3xl text-white">
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Study in Ireland
            </h1>
            <p className="mb-8 text-xl text-white/90 md:text-2xl">
              Discover top-notch education amidst Ireland's rich culture and breathtaking landscapes.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                asChild
                size="lg" 
                className="bg-green-600 text-lg hover:bg-green-700"
              >
                <Link href="/get-started?serviceName=Study Abroad&fromPage=France_Hero">Get Free Counselling</Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-2 text-lg text-black hover:bg-gray-300 hover:text-green-700"
              >
                <Link href="#popular-courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
