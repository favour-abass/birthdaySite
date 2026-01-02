import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import img1 from "../assets/images/grandma2.jpeg";
import img2 from "../assets/images/grandma3.jpeg";
import img3 from "../assets/images/grandma4.jpeg";
import img4 from "../assets/images/grandma12.jpeg";
import img5 from "../assets/images/grandma6.jpeg";
import img6 from "../assets/images/grandma10.jpeg";
import img7 from "../assets/images/grandma9.jpeg";
import img8 from "../assets/images/grandma7.jpeg";
import img9 from "../assets/images/grandma11.jpeg";
import img10 from "../assets/images/grandma13.jpeg";
import '../Section.css'

const Section = () => {
  const messages = [
    {
      id: 1,
      author: "Faruq",
      image: img1,
      message:
        "I feel truly honored to celebrate a very special woman — my granny.Granny, you are more than just a grandmother to me. You are a teacher, a guide, and a source of endless love. Through your words, prayers, and actions, you have shaped our family and taught us the importance of kindness, patience, and respect.Your life is a blessing to all of us. You have given so much love, strength, and wisdom, and we are better people because of you. Whenever I think of family, unity, and unconditional love, I think of you.On this special day, I pray that God continues to grant you good health, long life, and peace of mind. May your days be filled with joy, laughter, and the warmth of everyone you have touched.Thank you, Granny, for everything you do and everything you are. We love you deeply, and we are proud to call you our grandmother.",
      direction: "left",
    },
    {
      id: 2,
      author: "Kehinde",
      image: img2,
      message:
        "Dear Grandma, you are such an extraordinary blessing in my life. Your warmth, wisdom, and unconditional love have shaped me in countless ways. The memories we've created together are treasures I hold close to my heart. Your strength inspires me daily, and your kindness reminds me of the person I aspire to be. On this special day, I celebrate not just your birthday, but the beautiful soul you are. Thank you for every hug, every prayer, and every moment of joy you've brought into our lives. May this year bring you abundant health, happiness, and all the love you so generously give to others. Happy birthday, Grandma! May your day be as wonderful as you are! 💕",
      direction: "right",
    },
    {
      id: 3,
      author: "Faith, Favour, Farrell & Kabiru Abass",
      image: img3,
      message: "We want to say a big thank you for being such an incredible pillar of strength, in our lives. Your unwavering care, sacrifices and guidance have shaped us into who we are today. Who else will we get to learn cooking delicious Ijebu delicacies like Ekuru and Ojojo from? And of course, your Ijebu dialect lessons have come in handy more times than we can count! You've always taught us the importance of staying connected, caring for one another and keeping in touch with everyone. Your phone is always buzzing with messages and calls, keeping your loved ones close to your heart 💕. Your elegance, joy, humility and wisdom inspire us daily. We're grateful for the values you've instilled in us and for being our rock.On this special day, we pray that God continues to bless you with good health, happiness and longevity. May you keep shining bright like a star! ⭐",
      direction: "left",
    },
    {
      id: 4,
      author: "Martin, Micheal, Maxwell & Mercy Abass",
      image: img4,
      message: "Today we celebrate the wonderful light that you are—a beacon of love, strength, and wisdom that has guided our family through every season. Your stories shared over tea and around the kitchen table have become the threads that weave our family tapestry, reminding us where we come from. Your kindness isn't just a trait; it's a legacy. You've taught us that generosity is measured by the love we put into every act—whether baking your famous cookies or offering a listening ear. Through triumphs and trials, you've shown us the power of resilience with grace that humbles us all. On this special 80th birthday, we want you to know how deeply you are cherished. Your laughter is the soundtrack of our happiest times, and your wisdom guides us toward kindness and love. May this day be filled with the same joy you've spread. We love you more than words can capture, Grandma!",
      direction: "right",
    },
    {
      id: 5,
      author: "Adebosin haliyat",
      image: img5,
      message: "To my amazing Grandma, I cherish you more than words can ever say. Your love, strength, and kindness have shaped who I am today. Your home was that one place we all loved to go when we were young — you always had treats for everyone, and somehow, they never ran out! Even though you made us drink agbo before giving us sweets, we still ran to you with joy because your love made everything worthwhile. Thank you for every hug, every prayer, and every precious memory we've shared. Your wisdom and gentle guidance have been my compass through life. Happy birthday, Grandma. I love you more than words can say, and I'm so grateful for the blessing of having you in my life. Here's to more love, laughter, and many more sweet memories together! 😊",
      direction: "left",
    },
    {
      id: 6,
      author: "Mr. and Mrs. Odushe",
      image: img6,
      message: "Above all, we return glory and thanksgiving to the Lord Almighty for His mercy, protection, and unfailing love over your life. As the Scripture says, \"This is the Lord's doing; it is marvellous in our eyes.\" Mom, today we joyfully celebrate you as you mark your 80th birthday—a great testimony of God's faithfulness. We pray for continued blessings of long life, good health, and lasting happiness. You have been a loving, patient, and God-fearing mother, and a caring mother-in-law. Your sacrifices, prayers, and wise counsel have shaped our lives profoundly. Your life reflects kindness, humility, and faith in God. You've taught us the value of love, respect, and trust in the Lord. May the joy of the Lord continue to be your strength. Happy birthday, Maami. May your latter days be even more glorious, and may you enjoy the fruits of your labor. We love you dearly!",
      direction: "right",
    },
    {
      id: 7,
      author: "Aishat, Hammedat, Fathia.",
      image: img7,
      message: "As we gather today to celebrate you, we reflect on the countless ways you've touched our lives. Your unwavering love, boundless generosity, and infectious laughter have been the glue that holds our family together. From silly moments to serious ones, you've been there with a listening ear, a comforting hug, and words of wisdom that have shaped us. Your strength in the face of challenges, your kindness to everyone, and your unwavering faith are qualities we all admire and strive to emulate. You've taught us the value of family, the power of love, and the beauty of living with a joyful heart. As we celebrate another year, we're reminded of the legacy you're building—one of love, laughter, and countless memories. Happy Birthday, Grandma! May this day be filled with happiness, health, and all your favorite things, surrounded by people who adore you 💖. We love you more than words can say 🥰.",
      direction: "left",
    },
    {
      id: 8,
      author: "Serah.",
      image: img8,
      message: "Happy Birthday! On this day full of light and celebration, we honor the person who is the true heart and soul of this family. I'm so grateful to have you as my Grandma. Your love, care, and wisdom mean everything to me, and the memories we've made together are treasures I'll always cherish. I'm thankful for the sacrifices you've made for our family and the unconditional love you've shared with us. Your guidance has shaped me into who I am today, and your strength continues to inspire me. As you celebrate another year, I wish you happiness, abundant health, and more moments to enjoy life's simple pleasures. May your heart be filled with joy and your spirit lifted high. You're a treasure, Grandma, and I'm so blessed to be your grandchild. I love you more than words can say, today and every day!",
      direction: "right",
    },
    {
      id: 9,
      author: "Olowomuke Adeyinka & Talabi Tobiloba",
      image: img9,
      message: "Dear Grandma, we are truly honored to celebrate your life and the beautiful legacy of love you've built. Your presence in our lives has been a constant source of strength, comfort, and inspiration. The way you care for each of us with such tenderness and wisdom is a gift we treasure deeply. Thank you for being such an amazing source of love and unwavering support through every season of our lives. Your prayers have covered us, and your guidance has shaped our paths. We're so grateful for the values you've instilled in us and the memories we continue to create together. On this special day, we pray that God continues to bless you abundantly with good health, joy, and peace. Happy birthday, Grandma! We love you more than words can express.",
      direction: "left",
    },
    {
      id: 10,
      author: "Azezat & Bilikis Bello",
      image: img10,
      message: "We're honored to celebrate your life and the beautiful legacy of love you've created. Happy birthday, Grandma! Your presence in our lives has been a constant blessing, filling our days with warmth, wisdom, and unconditional love. Thank you for being such an amazing source of strength and support through every moment—big and small. The way you've nurtured and cared for our family is truly remarkable. Your gentle guidance, endless prayers, and kind heart have shaped us in ways we can never fully express. We're so grateful for every lesson you've taught us and every memory we've shared. On this special day, we pray that God continues to bless you abundantly with good health, happiness, and many more years of joy. We love you more than words can express, Grandma!",
      direction: "right",
    },
  ];

  return (
    <section id="messages" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-rose-800 mb-12 flex justify-center">
          Birthday Messages <AiOutlineMessage className="ms-2" />
        </h2>
        <div className="space-y-12">
          {messages.map((msg, index) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.direction === "right" ? "justify-end" : "justify-start"
              }`}
              style={{
                animation: `fadeIn${
                  msg.direction === "right" ? "Right" : "Left"
                } 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0,
              }}
            >
              <div className="w-full md:w-5/6 border-4 border-rose-300 rounded-xl p-6 bg-linear-to-br from-white to-rose-50 shadow-lg transition hover:shadow-2xl hover:-translate-y-1">
                <div className="grid grid-cols-2 gap-4">
                  {/* Image section - top left */}
                  <div className="row-span-2">
                    <div className="w-full h-full min-h-64 overflow-hidden">
                      {typeof msg.image === "string" && msg.image.length < 5 ? (
                        // If it's an emoji (short string)
                        <div className="w-full h-full flex items-center justify-center bg-linear-to-b from-rose-100 to-rose-400 rounded">
                          <span className="text-7xl">{msg.image}</span>
                        </div>
                      ) : (
                        // If it's an actual image
                        <img
                          src={msg.image}
                          alt={msg.author}
                          className="w-full h-96 object-cover rounded"
                        />
                      )}
                    </div>
                  </div>

                  {/* message */}
                  <div className="flex flex-col justify-start">
                    <p className="text-gray-800 text-base leading-relaxed align-middle">
                      {msg.message}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-rose-700 font-semibold text-lg text-right">
                      ~ {msg.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
