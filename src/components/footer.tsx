const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
    return (
        <footer className="mt-10 pt-20 px-8">
            <div className="max-w-5xl mx-auto">
                <div className="mt-16 flex flex-wrap items-center justify-center gap-4 border-t border-gray-300 py-6">
                    <p className="text-center text-gray-700 text-sm">
                        &copy; {CURRENT_YEAR} Built with Next.js, Tailwind CSS, and Material Tailwind by Alexis Binch Lee.
                        <a href="https://giphy.com/carolynnyoe" className="ml-1 text-blue-600 hover:underline">
                            Gif created by @carolynnyoe on Giphy.
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
