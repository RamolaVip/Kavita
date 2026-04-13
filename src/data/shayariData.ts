export interface ShayariEntry {
  hindi: string;
  romanized: string;
  meaning: string;
  category: string;
  author?: string;
}

export const SHAYARI_DATA: ShayariEntry[] = [
  // LOVE (ISHQ)
  {
    category: "love",
    hindi: "हज़ारों उलझनें राहों में और कोशिशें बेहिसाब,\nइसी का नाम है ज़िन्दगी, बस चलते रहिये जनाब।",
    romanized: "Hazaron uljhane rahon mein aur koshishein behisab,\nIsi ka naam hai zindagi, bas chalte rahiye janab.",
    meaning: "Life is a mix of countless complications and endless efforts; just keep moving forward."
  },
  {
    category: "love",
    hindi: "तुम्हें देखा तो ये ख्याल आया,\nज़िन्दगी धूप तुम घना साया।",
    romanized: "Tumhein dekha toh yeh khayal aaya,\nZindagi dhoop tum ghana saaya.",
    meaning: "When I saw you, I felt that life is like the scorching sun and you are the dense shade."
  },
  {
    category: "love",
    hindi: "मोहब्बत में नहीं है फर्क जीने और मरने में,\nउसी को देख कर जीते हैं जिस काफ़िर पे दम निकले।",
    romanized: "Mohabbat mein nahi hai farq jeene aur marne mein,\nUsi ko dekh kar jeete hain jis kafir pe dam nikle.",
    meaning: "In love, there is no difference between living and dying; we live by looking at the one for whom we are willing to die.",
    author: "Mirza Ghalib"
  },
  {
    category: "love",
    hindi: "दिल से तेरी याद न जाए तो मैं क्या करूँ,\nतस्वीर में तू नज़र आए तो मैं क्या करूँ।",
    romanized: "Dil se teri yaad na jaye toh mein kya karoon,\nTasveer mein tu nazar aaye toh mein kya karoon.",
    meaning: "If your memory doesn't leave my heart, what can I do? If I see you in every picture, what can I do?"
  },
  {
    category: "love",
    hindi: "इश्क ने गालिब निकम्मा कर दिया,\nवरना हम भी आदमी थे काम के।",
    romanized: "Ishq ne Ghalib nikamma kar diya,\nWarna hum bhi aadmi the kaam ke.",
    meaning: "Love has made me useless, O Ghalib; otherwise, I too was a man of some worth.",
    author: "Mirza Ghalib"
  },
  // SAD (DARD)
  {
    category: "sad",
    hindi: "आईना देखोगे तो मेरी याद आएगी,\nसाथ गुज़री वो मुलाकात याद आएगी।",
    romanized: "Aaina dekhoge toh meri yaad aayegi,\nSaath guzri woh mulaqat yaad aayegi.",
    meaning: "When you look in the mirror, you'll remember me and the moments we spent together."
  },
  {
    category: "sad",
    hindi: "दुख की लहर ने छेड़ा होगा,\nयाद ने कंकड़ फेंका होगा।",
    romanized: "Dukh ki lahar ne cheda hoga,\nYaad ne kankar phenka hoga.",
    meaning: "A wave of sorrow must have touched me, or a memory must have thrown a pebble into the stillness of my heart.",
    author: "Gulzar"
  },
  {
    category: "sad",
    hindi: "वो जो हम में तुम में करार था तुम्हें याद हो कि न याद हो,\nवही यानी वादा निबाह का तुम्हें याद हो कि न याद हो।",
    romanized: "Wo jo hum mein tum mein qarar tha tumhein yaad ho ki na yaad ho,\nWahi yaani wada nibah ka tumhein yaad ho ki na yaad ho.",
    meaning: "That agreement we had between us, whether you remember it or not; that promise of faithfulness, whether you remember it or not.",
    author: "Momin Khan Momin"
  },
  {
    category: "sad",
    hindi: "हम को उन से वफ़ा की है उम्मीद,\nजो नहीं जानते वफ़ा क्या है।",
    romanized: "Hum ko un se wafa ki hai umeed,\nJo nahi jaante wafa kya hai.",
    meaning: "I expect faithfulness from those who do not even know what faithfulness is.",
    author: "Mirza Ghalib"
  },
  // MOTIVATION (ZAZBA)
  {
    category: "motivation",
    hindi: "मंजिलें उन्हीं को मिलती हैं जिनके सपनों में जान होती है,\nपंखों से कुछ नहीं होता हौसलों से उड़ान होती है।",
    romanized: "Manzilein unhi ko milti hain jinke sapno mein jaan hoti hai,\nPankhon se kuch nahi hota hauslon se udaan hoti hai.",
    meaning: "Success comes to those whose dreams have life; wings alone don't matter, it's the courage that makes you fly."
  },
  {
    category: "motivation",
    hindi: "खुद को कर बुलंद इतना कि हर तकदीर से पहले,\nखुदा बंदे से खुद पूछे बता तेरी रज़ा क्या है।",
    romanized: "Khudi ko kar buland itna ki har taqdeer se pehle,\nKhuda bande se khud pooche bata teri raza kya hai.",
    meaning: "Elevate yourself so high that before every decree of fate, God Himself asks you, 'What is your wish?'",
    author: "Allama Iqbal"
  },
  {
    category: "motivation",
    hindi: "लहरों से डरकर नौका पार नहीं होती,\nकोशिश करने वालों की कभी हार नहीं होती।",
    romanized: "Lehron se darr kar nauka paar nahi hoti,\nKoshish karne walon ki kabhi haar nahi hoti.",
    meaning: "A boat does not cross the sea by fearing the waves; those who try never truly lose.",
    author: "Sohan Lal Dwivedi"
  },
  // LIFE (ZINDAGI)
  {
    category: "life",
    hindi: "ज़िन्दगी एक सफ़र है सुहाना,\nयहाँ कल क्या हो किसने जाना।",
    romanized: "Zindagi ek safar hai suhana,\nYahan kal kya ho kisne jaana.",
    meaning: "Life is a beautiful journey; who knows what will happen tomorrow?"
  },
  {
    category: "life",
    hindi: "दुनिया जिसे कहते हैं जादू का खिलौना है,\nमिल गया सो मिट्टी है खो गया सो सोना है।",
    romanized: "Duniya jise kehte hain jaadu ka khilona hai,\nMil gaya so mitti hai kho gaya so sona hai.",
    meaning: "The world is like a magical toy; what you have seems like dust, and what you've lost seems like gold.",
    author: "Nida Fazli"
  },
  {
    category: "life",
    hindi: "हज़ारों ख्वाहिशें ऐसी कि हर ख्वाहिश पे दम निकले,\nबहुत निकले मेरे अरमान लेकिन फिर भी कम निकले।",
    romanized: "Hazaron khwahishein aisi ki har khwahish pe dam nikle,\nBahut nikle mere armaan lekin phir bhi kam nikle.",
    meaning: "Thousands of desires, each worth dying for; many of my longings were fulfilled, yet they felt like so few.",
    author: "Mirza Ghalib"
  },
  // FRIENDSHIP (DOSTI)
  {
    category: "friendship",
    hindi: "दोस्ती आम है लेकिन ऐ दोस्त,\nदोस्त मिलता है बड़ी मुश्किल से।",
    romanized: "Dosti aam hai lekin ae dost,\nDost milta hai badi mushkil se.",
    meaning: "Friendship is common, but O friend, a true friend is found with great difficulty."
  },
  {
    category: "friendship",
    hindi: "दुश्मन न करे दोस्त ने वो काम किया है,\nउम्र भर का ग़म हमें इनाम दिया है।",
    romanized: "Dushman na kare dost ne wo kaam kiya hai,\nUmr bhar ka gham humein inaam diya hai.",
    meaning: "A friend has done what even an enemy wouldn't do; they have gifted me a lifetime of sorrow."
  }
];
