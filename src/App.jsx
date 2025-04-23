import React from "react";
import { motion, useInView } from "framer-motion";
import Footer from "./footer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import step1 from "./assets/step1.png";
import step2 from "./assets/step2.png";
import step3 from "./assets/step3.png";

const agodaLogo = "https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/ID/optimized/home/logo/logo-agoda.png";
const asosLogo = "https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/ID/optimized/home/logo/logo-asos.png";
const ebayLogo = "https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/ID/optimized/home/logo/logo-ebay.png";
const facebookLogo = "https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/ID/optimized/home/logo/logo-facebook.png";
const iherbLogo = "https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/ID/optimized/home/logo/logo-iherb.png";
const jomashopLogo = "https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/ID/optimized/home/logo/logo-jomashop.png";
const skypeLogo = "https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/ID/optimized/home/logo/logo-skype.png";

function App() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false  });

  return (
    <div className="relative w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
          <div
            id="hero"
            ref={ref}
            className="relative z-10 flex flex-col items-center justify-center h-screen text-center bg-blue-600 text-white px-4"
          >
            <motion.h1
              className="text-4xl font-bold sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: -50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Welcome to PayPal
            </motion.h1>
            <motion.p
              className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              PayPal is the faster, safer way to send money, make an online payment, receive money, or set up a merchant account.
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#features"
                className="text-lg sm:text-xl border border-white py-3 px-5 sm:py-4 sm:px-6 rounded-full text-white hover:bg-white hover:text-blue-600 ease-in-out duration-300 transform hover:scale-110"
              >
                Get Started
              </a>
            </motion.div>
          </div>

          {/* Features Section */}
          <div
      id="features"
      className="relative h-screen flex flex-col justify-center py-16 px-4 sm:px-6 bg-white text-gray-800"
    >
            <h2 className="text-2xl sm:text-5xl font-bold text-center mb-12">
              Why Choose PayPal?
            </h2>
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
              {[
                { icon: "💳", title: "Secure Payments", description: "Your financial information is encrypted and protected." },
                { icon: "🌐", title: "Global Reach", description: "Send and receive payments across the globe with ease." },
                { icon: "⚡", title: "Fast Transactions", description: "Experience quick and seamless transactions anytime." },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="hover:transform hover:scale-105 transition-transform duration-300">
                    <CardHeader className="flex items-center space-x-4">
                      <div className="text-blue-600 text-5xl">{feature.icon}</div>
                      <CardTitle className="text-lg sm:text-xl font-semibold">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardDescription className="text-sm sm:text-base px-4">
                      {feature.description}
                    </CardDescription>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div id="personal" className="h-screen bg-white text-center px-4 sm:px-6 flex flex-col justify-center items-center">
            <motion.h2
              className="text-2xl sm:text-5xl font-bold mb-8 sm:mb-20"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              It's as easy as 1, 2, 3
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-3 max-w-6xl mx-auto">
              {/* Step 1 */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img src={step1} alt="Step 1" className="h-32 sm:h-44 mb-4" />
                <h3 className="text-lg sm:text-2xl font-bold mb-2">Create Your Account</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Signing up for your very own PayPal account is easy and free.
                </p>
              </motion.div>
              {/* Step 2 */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <img src={step2} alt="Step 2" className="h-32 sm:h-44 mb-4" />
                <h3 className="text-lg sm:text-2xl font-bold mb-2">Link Your Cards</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Link your preferred credit, debit, or prepaid cards to your PayPal account.
                </p>
              </motion.div>
              {/* Step 3 */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <img src={step3} alt="Step 3" className="h-32 sm:h-44 mb-4" />
                <h3 className="text-lg sm:text-2xl font-bold mb-2">Choose PayPal at Checkout</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Use PayPal and you never need to enter your card details every time you pay.
                </p>
              </motion.div>
            </div>
          </div>

          <div id="business" className="py-16 bg-white text-center px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Looking for business solutions?</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              PayPal offers solutions for you to get paid easily and more securely however you do business - 
              on your online store or directly via email.
            </p>
            <a
              href="#business"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Explore Business Solutions
            </a>
          </div>

          <div id="partner" className="py-16 bg-gray-50 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Shop everywhere, anywhere</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="flex justify-center items-center">
                <img src={agodaLogo} alt="Agoda" className="h-20 sm:h-24" />
              </div>
              <div className="flex justify-center items-center">
                <img src={asosLogo} alt="Asos" className="h-20 sm:h-24" />
              </div>
              <div className="flex justify-center items-center">
                <img src={ebayLogo} alt="eBay" className="h-20 sm:h-24" />
              </div>
              <div className="flex justify-center items-center">
                <img src={facebookLogo} alt="Facebook" className="h-20 sm:h-24" />
              </div>
              <div className="flex justify-center items-center">
                <img src={iherbLogo} alt="iHerb" className="h-20 sm:h-24" />
              </div>
              <div className="flex justify-center items-center">
                <img src={jomashopLogo} alt="Jomashop" className="h-20 sm:h-24" />
              </div>
              <div className="flex justify-center items-center">
                <img src={skypeLogo} alt="Skype" className="h-20 sm:h-24" />
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="py-16 bg-gray-100 text-center px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-base sm:text-lg mb-6">
              Join millions of users who trust PayPal for their online transactions.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105 hover:cursor-pointer">
                  Sign Up Now
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Sign Up</DialogTitle>
                  <DialogDescription>
                    Create your PayPal account by filling in the details below.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  <DialogFooter>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                    >
                      Sign Up
                    </button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>


    </div>
  );
}

export default App;