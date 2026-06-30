/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  image: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "doors" | "windows" | "cupboards" | "interiors" | "repairs";
  image: string;
  description: string;
}

export interface WorkingStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StatisticItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  location: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
