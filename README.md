১.  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

       getElementById:একটি আইডি দিয়ে  একটি উপাদান  নির্বাচন করা  যায় ।
         getElementsByClassName: ক্লাস  এলিমেন্ট  দিয়ে অনেক  উপাদান নেওয়া  যাই ।
        querySelector:Class এর সাথে  মিলে  যাওয়া ভিতর থেকে  প্রথম উপাদান দেয় ।
        querySelectorAll(): Class এর সাথে মিলে  যাওয়া সব উপাদান দেয় ।


২.How do you create and insert a new element into the DOM?

  let newElement = document.createElement("div");
     newElement.innerText = "Hello World" ;

3. What is Event Bubbling and how does it work?

 Event Bubbling: DOM-এ ইভেন্টের propagate পদ্ধতি। যখন কোনো ইভেন্ট কোনো child element-এ ঘটে, এটি উপরের parent element এর দিকে যায় , শেষ পর্যন্ত html বা document পর্যন্ত যায়, যতক্ষণ না এটি থামানো হয়।

How it works:
document.getElementById("parent").addEventListener("click", function() {
    alert("parent clicked");
});

document.getElementById("child").addEventListener("click", function() {
    alert("child click");
});
 প্রথম  চাইল্ড  চাইল্ড  এ কাজ কবে তারপর প্যারেন্ট  কাজ করবে ।

4. What is Event Delegation in JavaScript? Why is it useful?

 Event Delegation হলো এমন একটি কৌশল যেখানে আমরা প্রতিটি child element-এ listener যোগ করার বদলে parent element-এ একটি listener যোগ করি।


Why is it useful?

অনেক listener দেওয়ার বদলে একটি listener ব্যবহার করা হয় 
যেসব element DOM-এ পরে dynamically যোগ হবে, সেগুলোর জন্য আলাদা listener দেওয়ার প্রয়োজন নেই।
প্রতিটি child element-এর জন্য আলাদা listener যোগ করতে হয় না।

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() :browser-এর default action বন্ধ করে।


stopPropagation():ইভেন্টের bubble বা capture বন্ধ করে।







