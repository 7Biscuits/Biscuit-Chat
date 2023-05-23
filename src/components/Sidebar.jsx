const Sidebar = () => {
    return (
        <div>
            <aside class="absolute flex flex-row lg:flex-col md:flex-col xl:flex-col w-full lg:w-64 md:w-60 xl:w-64 lg:h-screen md:h-screen xl:h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">

                <div class="flex center flex-row lg:flex-col md:flex-col xl:flex-col items-center mt-3 lg:mt-6 md:mt-4 xl:mt-6">
                        <h4 class="mx-2 mt-2 text-3xl text-gray-800 dark:text-gray-200">Biscuit-Chat</h4>
                </div>

                <div class="flex flex-row-reverse lg:flex-col md:flex-col xl:flex-col justify-between flex-1 mt-3 lg:mt-6 md:mt-4 xl:mt-6">
                    <nav>
                        <a class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" href="#">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span class="mx-4 font-medium">Chat</span>
                        </a>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar