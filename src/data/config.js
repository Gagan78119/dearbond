// DearBond Hampers Boutique Configuration
export const boutiqueConfig = {
  brandName: 'DearBond Hampers',
  tagline: 'Gifts That Speak From the Heart',
  subTagline: 'Happiness in Every Gift',
  
  // Instagram Configuration for direct booking & social connection
  instagram: {
    handle: '@dearbondhampers',
    username: 'dearbondhampers',
    profileUrl: 'https://instagram.com/dearbondhampers',
    directMessageUrl: 'https://ig.me/m/dearbondhampers',
  },

  // Contact Details
  contact: {
    email: 'hello@dearbondhampers.com',
    location: 'Mumbai & Pan-India Gifting Boutique',
    businessHours: 'Monday – Saturday: 10:00 AM – 7:00 PM IST',
  },

  // Booking & Delivery Policy
  bookingPolicy: {
    minAdvanceDays: 30,
    advancePaymentRequired: true,
    rules: [
      'All hampers must be booked at least 30 days prior to your preferred delivery date.',
      'Advance payment is mandatory to lock your date and source handcrafted contents.',
      'Orders are verified and confirmed by our team through Instagram Direct Message.',
      'For emergency or short-notice requests (< 30 days), contact us on Instagram to check slot availability.',
      'Customised and handcrafted gift boxes may require extra preparation time during peak festive seasons.',
    ],
    stages: [
      {
        step: 1,
        title: 'Enquiry Sent',
        desc: 'You send your detailed gift and delivery preferences to our Instagram DM.',
      },
      {
        step: 2,
        title: 'Availability Checked',
        desc: 'Our boutique curator verifies slot capacity, delivery radius, and packaging inventory.',
      },
      {
        step: 3,
        title: 'Booking Confirmed',
        desc: 'Upon advance payment verification, your order is officially scheduled and crafted.',
      },
    ],
  },
};
