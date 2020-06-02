import React from 'react'
import Pageheader from '../common/page-header'
import OurClients from './our-clients'
import TestimonialCard from './testimonial-cards'

const Testimonials = () => (
  <>
    <Pageheader title="Coast 2 Coast Testimonials" />
    <OurClients />
    <TestimonialCard
      review="“Ray provided me an assessment, advice and repair to my
      air conditioning unit and associated ducting. I couldn’t be more
      happier and appreciate the honest feedback from Ray. He was able
       to increase my AC unit efficiency.
      I intend on continuing business with Ray and highly recommend
       him for anyone interested in getting their AC inspected.”"
      name="X O., San Diego"
    />

    <TestimonialCard
      review="“I requested a quote to come troubleshoot/repair my AC
       unit and Raymond was extremely quick to respond. It wasn’t too
        long before I had made an appointment with them because they
        gave me the best quote.
      A few days later, Raymond came and looked at the unit and
      explained what the issue was. He did not have the part required
       for the job but was quick to jump on the phone to find the part
       needed. Everything took less than an hour to finish and couldn’t
        ask for any better service.

      I’ll definitely come back to Coast 2 Coast if the unit fails on me again.”"
      name="Jowie A., San Diego"
    />
    <TestimonialCard
      review="“I received a letter from my HOA notifying me that my AC unit
      needed repair. Bummer, someone damaged it and now I’m responsible for
      fixing it. Off to Yelp I go.
      After reaching out to several companies for quotes, Ray was the first
       one to respond and offer a quick assessment before throwing a number
        at me. He was very prompt, and we were able to get everything scheduled
        quickly. Ray came in, got the job done (and all extras I requested) in
        less than the time he estimated, and so I was charged a lower amount.

      The work was clean, very well done, and aesthetically pleasing. Ray does
       great work, but the best part in working with him was the open and
       upfront communication throughout the entire process.

      I’ll be adding Ray to my secret list of people I can refer to others
      who may need work done.”"
      name="Joe V., San Diego"
    />
  </>
)
export default Testimonials
