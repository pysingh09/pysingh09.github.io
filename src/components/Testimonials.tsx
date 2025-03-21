import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO, Tech Innovations Ltd',
    content: 'Working with Piyush was transformative for our business. His insights into the metaverse and blockchain technology helped us pivot successfully into Web3.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Founder, Future Labs',
    content: 'Piyush\'s leadership in the metaverse space is unparalleled. His vision and execution capabilities make him a valuable partner in any venture.',
  },
  {
    name: 'Michael Chen',
    role: 'Investment Director, VC Fund',
    content: 'The depth of knowledge and strategic thinking Piyush brings to projects is exceptional. His work with XANA India showcases his ability to drive innovation.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="text-blue-500 mb-4" size={32} />
              <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
              <div className="mt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-blue-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;