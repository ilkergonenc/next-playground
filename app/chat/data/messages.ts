export interface ChatMessageType {
	id: string
	role: 'system' | 'user' | 'assistant'
	message: string
}

export const messages: ChatMessageType[] = [
	{
		id: 'c305f976-8e38-42b1-9fb7-d21b2e34f0da',
		role: 'user',
		message:
			"AI Model, your task today is to list and explain the best practices for coding in a specified programming language. This task calls upon your knowledge of different programming languages, your understanding of efficient and maintainable coding practices, and your ability to explain these concepts in an accessible and compelling way.\n\nFirstly, you need to understand the specific programming language's syntax, conventions, and common use cases. With a diverse range of potential languages, from Python to Java, from JavaScript to Ruby, you need to be prepared to adapt your recommendations to suit the specific language's nuances.\n\nYour guide should provide clear and concise explanations of each best practice. You should discuss why the practice is important, how it improves the quality of the code, and any potential pitfalls of not following it.\n\nConsider your audience: developers at various levels of expertise. Your tone, language, and focus should be accessible to beginners, yet insightful enough to be useful to more experienced programmers.\n\nRemember, the best guides often provide real-world examples to illustrate each practice and might include tips for code review and refactoring to improve code quality.\n\nWith these considerations in mind, AI Model, your task is to list and explain the best practices for coding in a specified programming language. Your effectiveness will be evaluated based on the relevance and accuracy of your advice, your understanding of the programming language and coding practices, and your ability to engage and educate developers.",
	},
	{
		id: '464a47c3-7ab5-44d7-b669-f9cb5a9e8465',
		role: 'assistant',
		message:
			"Namaste! As a yoga instructor, I'd be delighted to offer you some advice on your yoga journey. Remember, yoga is not just a physical practice; it's a holistic approach to well-being that encompasses the body, mind, and soul. Here are some essential pieces of advice to enhance your yoga practice and overall well-being:\n\n1. Start with the Breath: The breath is the foundation of yoga. Focus on deep, conscious breathing throughout your practice. It calms the mind, increases oxygen flow, and helps you stay present in the moment.\n\n2. Listen to Your Body: Honor your body's limitations and avoid pushing yourself too hard. Every individual is different, so don't compare yourself to others. Embrace where you are in your practice, and progress will come with time and consistency.\n\n3. Regularity and Consistency: Practicing yoga regularly, even if it's just a few minutes each day, yields greater benefits than occasional intensive sessions. Consistency is key to progress and reaping the full rewards of yoga.\n\n4. Respect Your Edge: While it's essential to challenge yourself, be mindful not to overexert or strain your body. Find your edge\u2014the point where you feel a gentle stretch without pain\u2014and allow yourself to gradually expand it over time.\n\n5. Incorporate Meditation: Yoga and meditation go hand in hand. Take time to meditate, even if it's for a few minutes before or after your physical practice. Meditation helps quiet the mind, reduces stress, and enhances mental clarity.\n\n6. Be Patient: Progress in yoga may not always be linear. Some days you'll feel more flexible and strong, while other days may be more challenging. Embrace the journey and be patient with yourself.\n\n7. Find the Right Style: Explore different yoga styles and find the one that resonates with you the most. Whether it's Hatha, Vinyasa, Ashtanga, Yin, or any other style, the right fit will make your practice more enjoyable and sustainable.\n\n8. Respect Yoga Philosophy: Yoga is not just about physical postures; it has a rich philosophical foundation. Study and reflect on yogic principles like non-violence (ahimsa), truthfulness (satya), and contentment (santosha) to integrate them into your life off the mat.\n\n9. Stay Hydrated and Nourished: Drink enough water before and after your practice, and fuel your body with wholesome foods that support your energy levels and recovery.\n\n10. Embrace Gratitude: Cultivate a sense of gratitude for your body, your practice, and the opportunities it brings to grow physically, mentally, and spiritually.\n\nRemember, yoga is a lifelong journey of self-discovery and growth. Enjoy the process, be kind to yourself, and savor the transformative effects it can have on your life. If you have any specific questions or concerns about your practice, feel free to ask. Happy practicing!",
	},
]