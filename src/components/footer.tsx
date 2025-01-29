const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
    return (
        <footer className="mt-10 px-8 pt-20">
            <div className="container mx-auto">
                <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
                    <p className="text-center font-normal text-gray-700">
                        &copy; Built with Next.js, Tailwind CSS, and Material Tailwind by Alexis Binch Lee.
                        <a href="https://giphy.com/carolynnyoe"> Gif created by @carolynnyoe on Giphy.
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
