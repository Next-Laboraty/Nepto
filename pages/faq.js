export default function Faq(){
    return (
        <section class="py-12 md:py-20 px-6 md:px-0 bg-white">
            <div class="m-auto max-w-default">
                <div class="text-center">
                    <h2 class="md:text-5xl text-3xl text-gray-800 font-bold"> Frequent Questions</h2>
                </div>
                <div class="mt-10 md:mt-16">
                    <div class="md:max-w-3xl m-auto">
                        <details class="border-b-2">
                            <summary class="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">This is a first question</summary>
                            <p class="py-2 px-3 text-gray-600">This is a sample accordion answer</p>
                        </details>
                        <details class="border-b-2">
                            <summary class="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">This is a second question</summary>
                            <p class="py-2 px-3 text-gray-600">This is a sample accordion answer</p>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    )
}