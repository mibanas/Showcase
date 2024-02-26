import Head from 'next/head';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us - Your Business</title>
                <meta name="description" content="Contact us for more information about our services." />
                <meta name="keywords" content="contact, business, customer service" />
            </Head>
            <div className="bg-[#FD5956] min-h-screen flex justify-center items-center">
                <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
                    <h1 className="text-3xl font-bold mb-4 text-[#FD5956]">Contactez-nous</h1>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700">Nom</label>
                            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#FD5956]" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#FD5956]" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700">Message</label>
                            <textarea id="message" name="message" rows={4} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#FD5956]"></textarea>
                        </div>
                        <button type="submit" className="bg-[#FD5956] text-white py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none">Envoyer</button>
                    </form>
                </div>
            </div>
        </>
    );
}
