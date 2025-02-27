

export default function Footer() {
    <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                <div className="col-span-2">
                    <span className="text-2xl font-bold gradient-text">PrepHelp</span>
                    <p className="mt-4 text-gray-600">
                        Your ultimate companion for campus placement preparation at Chitkara University.
                    </p>
                </div>

                {[
                    {
                        title: 'Platform',
                        links: ['Features', 'Testimonials', 'Pricing', 'FAQ']
                    },
                    {
                        title: 'Company',
                        links: ['About', 'Careers', 'Blog', 'Contact']
                    },
                    {
                        title: 'Resources',
                        links: ['Documentation', 'Support', 'Terms', 'Privacy']
                    }
                ].map((section) => (
                    <div key={section.title}>
                        <h3 className="font-semibold text-gray-900">{section.title}</h3>
                        <ul className="mt-4 space-y-3">
                            {section.links.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="text-center text-gray-600">
                    <p>© 2024 PrepHelp. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
}


