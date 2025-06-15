'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/button';
import InputField from '@/components/ui/InputField';

const Footer = () => {
  return (
    <footer className=" pt-16 pb-8" style={{background:'linear-gradient(90deg, #fffdf9 0%, #fff7e6 100%)'}}>
      <div className="container mx-auto px-4">
        {/* Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-8 border-b border-gray-300 pb-8 mb-12">
          <div className="lg:max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3">
              Signup to our newsletter
            </h2>
            <p className="text-base sm:text-lg text-black">
              Stay updated with the latest news, announcements and articles.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <InputField
              placeholder="Enter your email-ID"
              className="flex-1 px-5 py-4 rounded-full border border-black w-full sm:w-[300px]"
            />
            <Button
              // variant="primary"
              className=""
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Section Template */}
          {[
            {
              title: 'Products',
              links: [
                'Overview',
                'Features',
                'Integrations',
                'Pricing',
                'Use Cases',
                ["What's New", 'New'],
              ],
            },
            {
              title: 'Company',
              links: [
                'About Us',
                'Careers',
                'Partners',
                'Press / Media Kit',
                'Contact',
                'Blog',
              ],
            },
            {
              title: 'Resources',
              links: [
                'Help Center',
                'Docs / API',
                'Getting Started',
                'FAQs',
                'Webinars / Demos',
                'Community',
              ],
            },
            {
              title: 'Social',
              links: [
                'LinkedIn',
                'Twitter / X',
                'YouTube',
                'Facebook',
                'Instagram',
                'GitHub',
              ],
            },
            {
              title: 'Legal',
              links: [
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'Licenses',
                'Security',
                'Data Processing Agreement',
              ],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <h3 className="text-xl font-bold text-black mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((item, i) =>
                  Array.isArray(item) ? (
                    <li key={i} className="flex items-center">
                      <Link href="#" className="text-black hover:text-blue-600">
                        {item[0]}
                      </Link>
                      <span className="ml-2 px-2 py-1 bg-black text-white text-xs rounded-full">
                        {item[1]}
                      </span>
                    </li>
                  ) : (
                    <li key={i}>
                      <Link href="#" className="text-black hover:text-blue-600">
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}

          {/* Get the App */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4 mt-2 lg:mt-8">Get The App</h3>
            <div className="space-y-3">
              <Image
                src="/images/googlepay.png"
                alt="Google Play Store"
                width={161}
                height={53}
                className="cursor-pointer"
              />
              <Image
                src="/images/img_downloadontheappstorebadgeusukrgbblk092917_1.svg"
                alt="App Store"
                width={161}
                height={53}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Image
                src="/images/img_iconsax_linear_copyright.svg"
                alt="Copyright"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="text-black font-bold text-sm sm:text-base">
                2025 Hexibee. All Rights Reserved.
              </span>
            </div>

            <div className="flex gap-4 flex-wrap justify-center">
              {[
                ['img_mdilinkedin.svg', 'LinkedIn'],
                ['img_mditwitter.svg', 'Twitter'],
                ['img_phinstagramlogo.svg', 'Instagram'],
                ['img_mdiyoutube.svg', 'YouTube'],
                ['img_mdiskype.svg', 'Skype'],
                ['img_mdigithub.svg', 'GitHub'],
              ].map(([src, alt], i) => (
                <Image
                  key={i}
                  src={`/images/${src}`}
                  alt={alt}
                  width={36}
                  height={36}
                  className="cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
