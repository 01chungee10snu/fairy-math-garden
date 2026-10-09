export const QUESTIONS = [
  {
    "id": "length-01",
    "course": "length",
    "level": 1,
    "emoji": "🍜",
    "title": "냠냠 국수",
    "story": "길이가 100cm인 아주 긴 국수 한 가닥이 있어요. 태희가 절반을 먹었어요.",
    "prompt": "남은 국수의 길이는 얼마일까요?",
    "choices": [
      "50cm · 0.5m",
      "50cm · 5m",
      "100cm · 1m"
    ],
    "answer": 0,
    "explain": [
      "절반을 먹었으니 전체의 절반인 50%가 남아요.",
      "100cm를 똑같이 둘로 나누면 50cm예요.",
      "100cm는 1m이므로 50cm는 0.5m예요."
    ],
    "total": 100,
    "percent": 50,
    "baseUnit": "cm",
    "result": 50,
    "convertValue": 0.5,
    "convertUnit": "m",
    "visualLabel": "남은 국수"
  },
  {
    "id": "length-02",
    "course": "length",
    "level": 1,
    "emoji": "🎀",
    "title": "선물 리본",
    "story": "길이가 200cm인 리본이 있어요. 세희가 선물을 꾸미는 데 절반을 썼어요.",
    "prompt": "남은 리본의 길이는 얼마일까요?",
    "choices": [
      "100cm · 10m",
      "100cm · 1m",
      "50cm · 0.5m"
    ],
    "answer": 1,
    "explain": [
      "절반을 썼으니 전체의 50%가 남아요.",
      "200cm의 절반은 100cm예요.",
      "100cm는 1m와 같아요."
    ],
    "total": 200,
    "percent": 50,
    "baseUnit": "cm",
    "result": 100,
    "convertValue": 1,
    "convertUnit": "m",
    "visualLabel": "남은 리본"
  },
  {
    "id": "length-03",
    "course": "length",
    "level": 1,
    "emoji": "🚂",
    "title": "장난감 기찻길",
    "story": "길이가 400cm인 장난감 기찻길을 만들 거예요. 지금까지 절반을 이었어요.",
    "prompt": "앞으로 더 이을 길이는 얼마일까요?",
    "choices": [
      "400cm · 4m",
      "200cm · 20m",
      "200cm · 2m"
    ],
    "answer": 2,
    "explain": [
      "기찻길의 절반을 이었으니 50%를 더 이어야 해요.",
      "400cm의 절반은 200cm예요.",
      "100cm가 1m이므로 200cm는 2m예요."
    ],
    "total": 400,
    "percent": 50,
    "baseUnit": "cm",
    "result": 200,
    "convertValue": 2,
    "convertUnit": "m",
    "visualLabel": "더 이을 기찻길"
  },
  {
    "id": "length-04",
    "course": "length",
    "level": 2,
    "emoji": "🪄",
    "title": "요정의 반짝 끈",
    "story": "길이가 100cm인 반짝 끈이 있어요. 요정이 전체 길이의 25%를 잘라 썼어요.",
    "prompt": "남은 반짝 끈의 길이는 얼마일까요?",
    "choices": [
      "25cm · 0.25m",
      "75cm · 0.75m",
      "75cm · 7.5m"
    ],
    "answer": 1,
    "explain": [
      "전체 100%에서 25%를 썼으니 75%가 남아요.",
      "100cm의 75%는 75cm예요.",
      "100cm는 1m이므로 75cm는 0.75m예요."
    ],
    "total": 100,
    "percent": 75,
    "baseUnit": "cm",
    "result": 75,
    "convertValue": 0.75,
    "convertUnit": "m",
    "visualLabel": "남은 반짝 끈"
  },
  {
    "id": "length-05",
    "course": "length",
    "level": 2,
    "emoji": "🏕️",
    "title": "인형 텐트 줄",
    "story": "길이가 200cm인 줄이 있어요. 인형 텐트를 세우는 데 전체 길이의 25%를 썼어요.",
    "prompt": "남은 줄의 길이는 얼마일까요?",
    "choices": [
      "150cm · 1.5m",
      "50cm · 0.5m",
      "150cm · 15m"
    ],
    "answer": 0,
    "explain": [
      "25%를 썼으니 전체의 75%가 남아요.",
      "200cm를 4등분하면 한 부분은 50cm이고, 세 부분은 150cm예요.",
      "100cm가 1m이므로 150cm는 1.5m예요."
    ],
    "total": 200,
    "percent": 75,
    "baseUnit": "cm",
    "result": 150,
    "convertValue": 1.5,
    "convertUnit": "m",
    "visualLabel": "남은 텐트 줄"
  },
  {
    "id": "length-06",
    "course": "length",
    "level": 2,
    "emoji": "🌷",
    "title": "꽃밭 울타리",
    "story": "길이가 400cm인 꽃밭 둘레에 울타리를 세워요. 전체 길이의 75%를 완성했어요.",
    "prompt": "울타리를 더 세울 길이는 얼마일까요?",
    "choices": [
      "300cm · 3m",
      "100cm · 10m",
      "100cm · 1m"
    ],
    "answer": 2,
    "explain": [
      "75%를 완성했으니 전체의 25%가 남아요.",
      "25%는 4분의 1이므로 400cm를 4로 나누면 100cm예요.",
      "100cm는 1m와 같아요."
    ],
    "total": 400,
    "percent": 25,
    "baseUnit": "cm",
    "result": 100,
    "convertValue": 1,
    "convertUnit": "m",
    "visualLabel": "더 세울 울타리"
  },
  {
    "id": "weight-01",
    "course": "weight",
    "level": 1,
    "emoji": "🍓",
    "title": "딸기 간식",
    "story": "딸기가 1000g 있어요. 태희와 세희가 함께 절반을 먹었어요.",
    "prompt": "남은 딸기의 무게는 얼마일까요?",
    "choices": [
      "500g · 5kg",
      "500g · 0.5kg",
      "1000g · 1kg"
    ],
    "answer": 1,
    "explain": [
      "절반을 먹었으니 전체의 50%가 남아요.",
      "1000g의 절반은 500g이에요.",
      "1000g은 1kg이므로 500g은 0.5kg이에요."
    ],
    "total": 1000,
    "percent": 50,
    "baseUnit": "g",
    "result": 500,
    "convertValue": 0.5,
    "convertUnit": "kg",
    "visualLabel": "남은 딸기"
  },
  {
    "id": "weight-02",
    "course": "weight",
    "level": 1,
    "emoji": "🍎",
    "title": "사과 나누기",
    "story": "사과가 2000g 있어요. 이웃에게 무게로 절반을 나누어 주었어요.",
    "prompt": "우리 집에 남은 사과의 무게는 얼마일까요?",
    "choices": [
      "500g · 0.5kg",
      "1000g · 10kg",
      "1000g · 1kg"
    ],
    "answer": 2,
    "explain": [
      "무게로 절반을 나누어 주었으니 50%가 남아요.",
      "2000g의 절반은 1000g이에요.",
      "1000g은 1kg과 같아요."
    ],
    "total": 2000,
    "percent": 50,
    "baseUnit": "g",
    "result": 1000,
    "convertValue": 1,
    "convertUnit": "kg",
    "visualLabel": "남은 사과"
  },
  {
    "id": "weight-03",
    "course": "weight",
    "level": 1,
    "emoji": "🍚",
    "title": "꼬마 주먹밥",
    "story": "밥이 1000g 있어요. 주먹밥을 만드는 데 절반을 썼어요.",
    "prompt": "아직 쓰지 않은 밥의 무게는 얼마일까요?",
    "choices": [
      "500g · 0.5kg",
      "500g · 50kg",
      "100g · 0.1kg"
    ],
    "answer": 0,
    "explain": [
      "절반을 썼으니 전체의 50%가 남아요.",
      "1000g을 똑같이 둘로 나누면 500g이에요.",
      "1000g은 1kg이므로 500g은 0.5kg이에요."
    ],
    "total": 1000,
    "percent": 50,
    "baseUnit": "g",
    "result": 500,
    "convertValue": 0.5,
    "convertUnit": "kg",
    "visualLabel": "남은 밥"
  },
  {
    "id": "weight-04",
    "course": "weight",
    "level": 2,
    "emoji": "🍪",
    "title": "쿠키 반죽",
    "story": "쿠키 반죽이 1000g 있어요. 작은 쿠키를 굽는 데 전체 무게의 10%를 썼어요.",
    "prompt": "남은 반죽의 무게는 얼마일까요?",
    "choices": [
      "100g · 0.1kg",
      "900g · 9kg",
      "900g · 0.9kg"
    ],
    "answer": 2,
    "explain": [
      "전체 100%에서 10%를 썼으니 90%가 남아요.",
      "1000g의 10%는 100g이므로 1000g에서 100g을 빼면 900g이에요.",
      "1000g이 1kg이므로 900g은 0.9kg이에요."
    ],
    "total": 1000,
    "percent": 90,
    "baseUnit": "g",
    "result": 900,
    "convertValue": 0.9,
    "convertUnit": "kg",
    "visualLabel": "남은 쿠키 반죽"
  },
  {
    "id": "weight-05",
    "course": "weight",
    "level": 2,
    "emoji": "🍊",
    "title": "귤 소풍",
    "story": "소풍에 가져갈 귤이 2000g 있어요. 출발 전에 전체 무게의 25%를 먹었어요.",
    "prompt": "소풍에 가져갈 남은 귤의 무게는 얼마일까요?",
    "choices": [
      "1500g · 1.5kg",
      "500g · 0.5kg",
      "1500g · 15kg"
    ],
    "answer": 0,
    "explain": [
      "25%를 먹었으니 전체의 75%가 남아요.",
      "2000g을 4등분하면 한 부분은 500g이고, 세 부분은 1500g이에요.",
      "1000g이 1kg이므로 1500g은 1.5kg이에요."
    ],
    "total": 2000,
    "percent": 75,
    "baseUnit": "g",
    "result": 1500,
    "convertValue": 1.5,
    "convertUnit": "kg",
    "visualLabel": "남은 귤"
  },
  {
    "id": "weight-06",
    "course": "weight",
    "level": 2,
    "emoji": "🥔",
    "title": "감자 수프",
    "story": "감자가 4000g 있어요. 수프를 만드는 데 전체 무게의 75%를 썼어요.",
    "prompt": "남은 감자의 무게는 얼마일까요?",
    "choices": [
      "3000g · 3kg",
      "1000g · 1kg",
      "1000g · 10kg"
    ],
    "answer": 1,
    "explain": [
      "75%를 썼으니 전체의 25%가 남아요.",
      "25%는 4분의 1이므로 4000g을 4로 나누면 1000g이에요.",
      "1000g은 1kg과 같아요."
    ],
    "total": 4000,
    "percent": 25,
    "baseUnit": "g",
    "result": 1000,
    "convertValue": 1,
    "convertUnit": "kg",
    "visualLabel": "남은 감자"
  },
  {
    "id": "distance-01",
    "course": "distance",
    "level": 1,
    "emoji": "🦋",
    "title": "나비 공원",
    "story": "집에서 나비 공원까지는 1000m예요. 공원을 향해 전체 거리의 절반을 걸었어요.",
    "prompt": "공원까지 더 걸을 거리는 얼마일까요?",
    "choices": [
      "500m · 0.5km",
      "500m · 5km",
      "1000m · 1km"
    ],
    "answer": 0,
    "explain": [
      "전체 거리의 절반을 걸었으니 50%가 남아요.",
      "1000m의 절반은 500m예요.",
      "1000m는 1km이므로 500m는 0.5km예요."
    ],
    "total": 1000,
    "percent": 50,
    "baseUnit": "m",
    "result": 500,
    "convertValue": 0.5,
    "convertUnit": "km",
    "visualLabel": "더 걸을 거리"
  },
  {
    "id": "distance-02",
    "course": "distance",
    "level": 1,
    "emoji": "🚲",
    "title": "자전거 소풍",
    "story": "자전거로 2000m를 달리기로 했어요. 지금까지 전체 거리의 절반을 달렸어요.",
    "prompt": "앞으로 더 달릴 거리는 얼마일까요?",
    "choices": [
      "1000m · 10km",
      "500m · 0.5km",
      "1000m · 1km"
    ],
    "answer": 2,
    "explain": [
      "절반을 달렸으니 전체 거리의 50%가 남아요.",
      "2000m의 절반은 1000m예요.",
      "1000m는 1km와 같아요."
    ],
    "total": 2000,
    "percent": 50,
    "baseUnit": "m",
    "result": 1000,
    "convertValue": 1,
    "convertUnit": "km",
    "visualLabel": "더 달릴 거리"
  },
  {
    "id": "distance-03",
    "course": "distance",
    "level": 1,
    "emoji": "🚌",
    "title": "수족관 버스",
    "story": "수족관까지 버스로 가는 거리는 4000m예요. 버스가 전체 거리의 절반을 갔어요.",
    "prompt": "수족관까지 남은 거리는 얼마일까요?",
    "choices": [
      "2000m · 20km",
      "2000m · 2km",
      "4000m · 4km"
    ],
    "answer": 1,
    "explain": [
      "전체 거리의 절반을 갔으니 50%가 남아요.",
      "4000m의 절반은 2000m예요.",
      "1000m가 1km이므로 2000m는 2km예요."
    ],
    "total": 4000,
    "percent": 50,
    "baseUnit": "m",
    "result": 2000,
    "convertValue": 2,
    "convertUnit": "km",
    "visualLabel": "남은 버스 여행"
  },
  {
    "id": "distance-04",
    "course": "distance",
    "level": 2,
    "emoji": "🗺️",
    "title": "보물 지도",
    "story": "출발점에서 보물상자까지의 길은 1000m예요. 전체 거리의 25%를 걸었어요.",
    "prompt": "보물상자까지 더 걸을 거리는 얼마일까요?",
    "choices": [
      "250m · 0.25km",
      "750m · 7.5km",
      "750m · 0.75km"
    ],
    "answer": 2,
    "explain": [
      "25%를 걸었으니 전체 거리의 75%가 남아요.",
      "1000m를 4등분하면 한 부분은 250m이고, 세 부분은 750m예요.",
      "1000m가 1km이므로 750m는 0.75km예요."
    ],
    "total": 1000,
    "percent": 75,
    "baseUnit": "m",
    "result": 750,
    "convertValue": 0.75,
    "convertUnit": "km",
    "visualLabel": "보물까지 남은 길"
  },
  {
    "id": "distance-05",
    "course": "distance",
    "level": 2,
    "emoji": "🚀",
    "title": "달 탐사 자동차",
    "story": "달 탐사 자동차가 기지까지 2000m를 가요. 지금까지 전체 거리의 10%를 갔어요.",
    "prompt": "기지까지 더 갈 거리는 얼마일까요?",
    "choices": [
      "1800m · 1.8km",
      "200m · 0.2km",
      "1800m · 18km"
    ],
    "answer": 0,
    "explain": [
      "10%를 갔으니 전체 거리의 90%가 남아요.",
      "2000m의 10%는 200m이므로 2000m에서 200m를 빼면 1800m예요.",
      "1000m가 1km이므로 1800m는 1.8km예요."
    ],
    "total": 2000,
    "percent": 90,
    "baseUnit": "m",
    "result": 1800,
    "convertValue": 1.8,
    "convertUnit": "km",
    "visualLabel": "기지까지 남은 길"
  },
  {
    "id": "distance-06",
    "course": "distance",
    "level": 2,
    "emoji": "🚂",
    "title": "숲속 꼬마 기차",
    "story": "꼬마 기차의 여행길은 4000m예요. 전체 거리의 75%를 달렸어요.",
    "prompt": "도착할 때까지 더 달릴 거리는 얼마일까요?",
    "choices": [
      "3000m · 3km",
      "1000m · 1km",
      "1000m · 10km"
    ],
    "answer": 1,
    "explain": [
      "75%를 달렸으니 전체 거리의 25%가 남아요.",
      "25%는 4분의 1이므로 4000m를 4로 나누면 1000m예요.",
      "1000m는 1km와 같아요."
    ],
    "total": 4000,
    "percent": 25,
    "baseUnit": "m",
    "result": 1000,
    "convertValue": 1,
    "convertUnit": "km",
    "visualLabel": "기차가 더 갈 길"
  },
  {
    "id": "mix-01",
    "course": "mix",
    "level": 1,
    "emoji": "🧣",
    "title": "인형 목도리",
    "story": "길이가 100cm인 천이 있어요. 인형 목도리를 만드는 데 길이의 절반을 썼어요.",
    "prompt": "남은 천의 길이는 얼마일까요?",
    "choices": [
      "50cm · 5m",
      "100cm · 1m",
      "50cm · 0.5m"
    ],
    "answer": 2,
    "explain": [
      "길이의 절반을 썼으니 전체의 50%가 남아요.",
      "100cm의 절반은 50cm예요.",
      "100cm가 1m이므로 50cm는 0.5m예요."
    ],
    "total": 100,
    "percent": 50,
    "baseUnit": "cm",
    "result": 50,
    "convertValue": 0.5,
    "convertUnit": "m",
    "visualLabel": "남은 천"
  },
  {
    "id": "mix-02",
    "course": "mix",
    "level": 1,
    "emoji": "🍉",
    "title": "수박 파티",
    "story": "먹기 좋게 자른 수박이 2000g 있어요. 가족이 무게로 절반을 먹었어요.",
    "prompt": "남은 수박의 무게는 얼마일까요?",
    "choices": [
      "1000g · 1kg",
      "1000g · 10kg",
      "500g · 0.5kg"
    ],
    "answer": 0,
    "explain": [
      "무게로 절반을 먹었으니 전체의 50%가 남아요.",
      "2000g의 절반은 1000g이에요.",
      "1000g은 1kg과 같아요."
    ],
    "total": 2000,
    "percent": 50,
    "baseUnit": "g",
    "result": 1000,
    "convertValue": 1,
    "convertUnit": "kg",
    "visualLabel": "남은 수박"
  },
  {
    "id": "mix-03",
    "course": "mix",
    "level": 1,
    "emoji": "🎠",
    "title": "회전목마 가는 길",
    "story": "놀이공원 입구에서 회전목마까지는 1000m예요. 전체 거리의 절반을 걸었어요.",
    "prompt": "회전목마까지 더 걸을 거리는 얼마일까요?",
    "choices": [
      "500m · 5km",
      "500m · 0.5km",
      "100m · 0.1km"
    ],
    "answer": 1,
    "explain": [
      "절반을 걸었으니 전체 거리의 50%가 남아요.",
      "1000m의 절반은 500m예요.",
      "1000m가 1km이므로 500m는 0.5km예요."
    ],
    "total": 1000,
    "percent": 50,
    "baseUnit": "m",
    "result": 500,
    "convertValue": 0.5,
    "convertUnit": "km",
    "visualLabel": "회전목마까지 남은 길"
  },
  {
    "id": "mix-04",
    "course": "mix",
    "level": 2,
    "emoji": "📿",
    "title": "구슬 장식 끈",
    "story": "길이가 100cm인 끈이 있어요. 구슬 장식에 전체 길이의 10%를 썼어요.",
    "prompt": "남은 끈의 길이는 얼마일까요?",
    "choices": [
      "90cm · 0.9m",
      "10cm · 0.1m",
      "90cm · 9m"
    ],
    "answer": 0,
    "explain": [
      "10%를 썼으니 전체의 90%가 남아요.",
      "100cm의 10%는 10cm이므로 100cm에서 10cm를 빼면 90cm예요.",
      "100cm가 1m이므로 90cm는 0.9m예요."
    ],
    "total": 100,
    "percent": 90,
    "baseUnit": "cm",
    "result": 90,
    "convertValue": 0.9,
    "convertUnit": "m",
    "visualLabel": "남은 장식 끈"
  },
  {
    "id": "mix-05",
    "course": "mix",
    "level": 2,
    "emoji": "🍫",
    "title": "초콜릿 만들기",
    "story": "초콜릿 재료가 1000g 있어요. 별 모양 초콜릿을 만드는 데 전체 무게의 75%를 썼어요.",
    "prompt": "남은 재료의 무게는 얼마일까요?",
    "choices": [
      "750g · 0.75kg",
      "250g · 0.25kg",
      "250g · 2.5kg"
    ],
    "answer": 1,
    "explain": [
      "75%를 썼으니 전체의 25%가 남아요.",
      "25%는 4분의 1이므로 1000g을 4로 나누면 250g이에요.",
      "1000g이 1kg이므로 250g은 0.25kg이에요."
    ],
    "total": 1000,
    "percent": 25,
    "baseUnit": "g",
    "result": 250,
    "convertValue": 0.25,
    "convertUnit": "kg",
    "visualLabel": "남은 초콜릿 재료"
  },
  {
    "id": "mix-06",
    "course": "mix",
    "level": 2,
    "emoji": "🏰",
    "title": "무지개 성",
    "story": "무지개 성까지 가는 길은 2000m예요. 전체 거리의 25%를 걸었어요.",
    "prompt": "성까지 더 걸을 거리는 얼마일까요?",
    "choices": [
      "500m · 0.5km",
      "1500m · 15km",
      "1500m · 1.5km"
    ],
    "answer": 2,
    "explain": [
      "25%를 걸었으니 전체 거리의 75%가 남아요.",
      "2000m를 4등분하면 한 부분은 500m이고, 세 부분은 1500m예요.",
      "1000m가 1km이므로 1500m는 1.5km예요."
    ],
    "total": 2000,
    "percent": 75,
    "baseUnit": "m",
    "result": 1500,
    "convertValue": 1.5,
    "convertUnit": "km",
    "visualLabel": "성까지 남은 길"
  },
  {
    "id": "length-07",
    "course": "length",
    "level": 1,
    "emoji": "🎁",
    "title": "새 리본 한 롤",
    "story": "길이가 100cm인 리본을 꺼냈어요. 아직 하나도 자르지 않았어요.",
    "prompt": "지금 남아 있는 리본의 길이는 얼마일까요?",
    "choices": [
      "50cm · 0.5m",
      "100cm · 1m",
      "0cm · 0m"
    ],
    "answer": 1,
    "explain": [
      "하나도 쓰지 않으면 전체인 100%가 남아요.",
      "처음 있던 100cm가 그대로 있어요.",
      "100cm는 1m와 같아요."
    ],
    "total": 100,
    "percent": 100,
    "baseUnit": "cm",
    "result": 100,
    "convertValue": 1,
    "convertUnit": "m",
    "visualLabel": "그대로 남은 리본"
  },
  {
    "id": "length-08",
    "course": "length",
    "level": 1,
    "emoji": "🖍️",
    "title": "그림 테두리",
    "story": "길이가 200cm인 장식 테이프가 있어요. 그림 테두리를 꾸미는 데 전부 썼어요.",
    "prompt": "아직 쓰지 않은 테이프의 길이는 얼마일까요?",
    "choices": [
      "200cm · 2m",
      "100cm · 1m",
      "0cm · 0m"
    ],
    "answer": 2,
    "explain": [
      "전체 100%를 다 썼으니 남은 비율은 0%예요.",
      "남은 테이프는 0cm예요.",
      "길이가 없으니 미터로 나타내도 0m예요."
    ],
    "total": 200,
    "percent": 0,
    "baseUnit": "cm",
    "result": 0,
    "convertValue": 0,
    "convertUnit": "m",
    "visualLabel": "남은 테이프"
  },
  {
    "id": "length-09",
    "course": "length",
    "level": 1,
    "emoji": "🎈",
    "title": "풍선 파티 줄",
    "story": "길이가 600cm인 줄이 있어요. 풍선을 매다는 데 절반을 썼어요.",
    "prompt": "남은 줄의 길이는 얼마일까요?",
    "choices": [
      "300cm · 3m",
      "300cm · 30m",
      "600cm · 6m"
    ],
    "answer": 0,
    "explain": [
      "절반을 썼으니 전체의 50%가 남아요.",
      "600cm의 절반은 300cm예요.",
      "100cm가 1m이므로 300cm는 3m예요."
    ],
    "total": 600,
    "percent": 50,
    "baseUnit": "cm",
    "result": 300,
    "convertValue": 3,
    "convertUnit": "m",
    "visualLabel": "남은 풍선 줄"
  },
  {
    "id": "length-10",
    "course": "length",
    "level": 2,
    "emoji": "🌈",
    "title": "무지개 종이띠",
    "story": "길이가 100cm인 무지개 종이띠가 있어요. 전체 길이의 20%를 잘라 썼어요.",
    "prompt": "남은 종이띠의 길이는 얼마일까요?",
    "choices": [
      "20cm · 0.2m",
      "80cm · 0.8m",
      "80cm · 8m"
    ],
    "answer": 1,
    "explain": [
      "20%를 썼으니 전체의 80%가 남아요.",
      "100cm의 80%는 80cm예요.",
      "100cm가 1m이므로 80cm는 0.8m예요."
    ],
    "total": 100,
    "percent": 80,
    "baseUnit": "cm",
    "result": 80,
    "convertValue": 0.8,
    "convertUnit": "m",
    "visualLabel": "남은 종이띠"
  },
  {
    "id": "length-11",
    "course": "length",
    "level": 2,
    "emoji": "🧵",
    "title": "요정 망토 끈",
    "story": "길이가 500cm인 끈이 있어요. 요정 망토를 만드는 데 전체 길이의 40%를 썼어요.",
    "prompt": "남은 끈의 길이는 얼마일까요?",
    "choices": [
      "200cm · 2m",
      "300cm · 30m",
      "300cm · 3m"
    ],
    "answer": 2,
    "explain": [
      "40%를 썼으니 전체의 60%가 남아요.",
      "500cm의 10%는 50cm이고, 60%는 그 6배인 300cm예요.",
      "100cm가 1m이므로 300cm는 3m예요."
    ],
    "total": 500,
    "percent": 60,
    "baseUnit": "cm",
    "result": 300,
    "convertValue": 3,
    "convertUnit": "m",
    "visualLabel": "남은 망토 끈"
  },
  {
    "id": "length-12",
    "course": "length",
    "level": 2,
    "emoji": "🪁",
    "title": "연 꼬리 장식",
    "story": "길이가 500cm인 천이 있어요. 연 꼬리를 만드는 데 전체 길이의 60%를 썼어요.",
    "prompt": "남은 천의 길이는 얼마일까요?",
    "choices": [
      "200cm · 2m",
      "300cm · 3m",
      "200cm · 20m"
    ],
    "answer": 0,
    "explain": [
      "60%를 썼으니 전체의 40%가 남아요.",
      "500cm의 10%는 50cm이고, 40%는 그 4배인 200cm예요.",
      "100cm가 1m이므로 200cm는 2m예요."
    ],
    "total": 500,
    "percent": 40,
    "baseUnit": "cm",
    "result": 200,
    "convertValue": 2,
    "convertUnit": "m",
    "visualLabel": "남은 천"
  },
  {
    "id": "weight-07",
    "course": "weight",
    "level": 1,
    "emoji": "🫐",
    "title": "블루베리 상자",
    "story": "블루베리가 1000g 있어요. 아직 하나도 먹지 않았어요.",
    "prompt": "남아 있는 블루베리의 무게는 얼마일까요?",
    "choices": [
      "1000g · 1kg",
      "500g · 0.5kg",
      "0g · 0kg"
    ],
    "answer": 0,
    "explain": [
      "하나도 먹지 않았으니 전체인 100%가 남아요.",
      "처음 있던 1000g이 그대로 있어요.",
      "1000g은 1kg과 같아요."
    ],
    "total": 1000,
    "percent": 100,
    "baseUnit": "g",
    "result": 1000,
    "convertValue": 1,
    "convertUnit": "kg",
    "visualLabel": "그대로 남은 블루베리"
  },
  {
    "id": "weight-08",
    "course": "weight",
    "level": 1,
    "emoji": "🥞",
    "title": "팬케이크 완성",
    "story": "팬케이크 반죽이 1000g 있어요. 반죽을 전부 구웠어요.",
    "prompt": "아직 굽지 않은 반죽의 무게는 얼마일까요?",
    "choices": [
      "1000g · 1kg",
      "0g · 0kg",
      "500g · 0.5kg"
    ],
    "answer": 1,
    "explain": [
      "전체 100%를 다 구웠으니 굽지 않은 반죽은 0%예요.",
      "굽지 않은 반죽의 무게는 0g이에요.",
      "0g은 킬로그램으로 나타내도 0kg이에요."
    ],
    "total": 1000,
    "percent": 0,
    "baseUnit": "g",
    "result": 0,
    "convertValue": 0,
    "convertUnit": "kg",
    "visualLabel": "굽지 않은 반죽"
  },
  {
    "id": "weight-09",
    "course": "weight",
    "level": 1,
    "emoji": "🥕",
    "title": "토끼의 당근",
    "story": "토끼들이 먹을 당근이 6000g 있어요. 무게로 절반을 토끼들에게 주었어요.",
    "prompt": "아직 주지 않은 당근의 무게는 얼마일까요?",
    "choices": [
      "6000g · 6kg",
      "3000g · 30kg",
      "3000g · 3kg"
    ],
    "answer": 2,
    "explain": [
      "무게로 절반을 주었으니 전체의 50%가 남아요.",
      "6000g의 절반은 3000g이에요.",
      "1000g이 1kg이므로 3000g은 3kg이에요."
    ],
    "total": 6000,
    "percent": 50,
    "baseUnit": "g",
    "result": 3000,
    "convertValue": 3,
    "convertUnit": "kg",
    "visualLabel": "남은 당근"
  },
  {
    "id": "weight-10",
    "course": "weight",
    "level": 2,
    "emoji": "🍇",
    "title": "포도 간식",
    "story": "포도가 1000g 있어요. 전체 무게의 20%를 먹었어요.",
    "prompt": "남은 포도의 무게는 얼마일까요?",
    "choices": [
      "200g · 0.2kg",
      "800g · 8kg",
      "800g · 0.8kg"
    ],
    "answer": 2,
    "explain": [
      "20%를 먹었으니 전체의 80%가 남아요.",
      "1000g의 10%는 100g이고, 80%는 그 8배인 800g이에요.",
      "1000g이 1kg이므로 800g은 0.8kg이에요."
    ],
    "total": 1000,
    "percent": 80,
    "baseUnit": "g",
    "result": 800,
    "convertValue": 0.8,
    "convertUnit": "kg",
    "visualLabel": "남은 포도"
  },
  {
    "id": "weight-11",
    "course": "weight",
    "level": 2,
    "emoji": "🍠",
    "title": "군고구마 가게",
    "story": "고구마가 5000g 있어요. 전체 무게의 40%를 구웠어요.",
    "prompt": "아직 굽지 않은 고구마의 무게는 얼마일까요?",
    "choices": [
      "3000g · 3kg",
      "2000g · 2kg",
      "3000g · 30kg"
    ],
    "answer": 0,
    "explain": [
      "40%를 구웠으니 아직 굽지 않은 것은 전체의 60%예요.",
      "5000g의 10%는 500g이고, 60%는 그 6배인 3000g이에요.",
      "1000g이 1kg이므로 3000g은 3kg이에요."
    ],
    "total": 5000,
    "percent": 60,
    "baseUnit": "g",
    "result": 3000,
    "convertValue": 3,
    "convertUnit": "kg",
    "visualLabel": "굽지 않은 고구마"
  },
  {
    "id": "weight-12",
    "course": "weight",
    "level": 2,
    "emoji": "🍒",
    "title": "체리 나눔",
    "story": "체리가 1000g 있어요. 전체 무게의 80%를 친구들에게 나누어 주었어요.",
    "prompt": "남은 체리의 무게는 얼마일까요?",
    "choices": [
      "800g · 0.8kg",
      "200g · 0.2kg",
      "200g · 2kg"
    ],
    "answer": 1,
    "explain": [
      "80%를 나누어 주었으니 전체의 20%가 남아요.",
      "1000g의 10%는 100g이고, 20%는 그 2배인 200g이에요.",
      "1000g이 1kg이므로 200g은 0.2kg이에요."
    ],
    "total": 1000,
    "percent": 20,
    "baseUnit": "g",
    "result": 200,
    "convertValue": 0.2,
    "convertUnit": "kg",
    "visualLabel": "남은 체리"
  },
  {
    "id": "distance-07",
    "course": "distance",
    "level": 1,
    "emoji": "🏡",
    "title": "산책 출발",
    "story": "집에서 놀이터까지는 1000m예요. 아직 집에서 출발하지 않았어요.",
    "prompt": "놀이터까지 앞으로 걸을 거리는 얼마일까요?",
    "choices": [
      "0m · 0km",
      "1000m · 1km",
      "500m · 0.5km"
    ],
    "answer": 1,
    "explain": [
      "아직 출발하지 않았으니 전체 거리인 100%가 남아요.",
      "앞으로 걸을 거리는 1000m예요.",
      "1000m는 1km와 같아요."
    ],
    "total": 1000,
    "percent": 100,
    "baseUnit": "m",
    "result": 1000,
    "convertValue": 1,
    "convertUnit": "km",
    "visualLabel": "앞으로 걸을 길"
  },
  {
    "id": "distance-08",
    "course": "distance",
    "level": 1,
    "emoji": "🏁",
    "title": "드디어 도착",
    "story": "집에서 도서관까지는 1000m예요. 1000m를 모두 걸어 도서관에 도착했어요.",
    "prompt": "도서관까지 더 걸어야 할 거리는 얼마일까요?",
    "choices": [
      "0m · 0km",
      "1000m · 1km",
      "500m · 0.5km"
    ],
    "answer": 0,
    "explain": [
      "전체 거리인 100%를 다 걸었으니 남은 거리는 0%예요.",
      "이미 도착했으니 더 걸을 거리는 0m예요.",
      "0m는 킬로미터로 나타내도 0km예요."
    ],
    "total": 1000,
    "percent": 0,
    "baseUnit": "m",
    "result": 0,
    "convertValue": 0,
    "convertUnit": "km",
    "visualLabel": "더 걸을 거리"
  },
  {
    "id": "distance-09",
    "course": "distance",
    "level": 1,
    "emoji": "⛴️",
    "title": "섬으로 가는 배",
    "story": "배를 타고 섬까지 6000m를 가요. 지금까지 전체 거리의 절반을 갔어요.",
    "prompt": "섬까지 남은 거리는 얼마일까요?",
    "choices": [
      "6000m · 6km",
      "3000m · 30km",
      "3000m · 3km"
    ],
    "answer": 2,
    "explain": [
      "절반을 갔으니 전체 거리의 50%가 남아요.",
      "6000m의 절반은 3000m예요.",
      "1000m가 1km이므로 3000m는 3km예요."
    ],
    "total": 6000,
    "percent": 50,
    "baseUnit": "m",
    "result": 3000,
    "convertValue": 3,
    "convertUnit": "km",
    "visualLabel": "섬까지 남은 길"
  },
  {
    "id": "distance-10",
    "course": "distance",
    "level": 2,
    "emoji": "🎡",
    "title": "관람차 가는 길",
    "story": "관람차까지의 길은 1000m예요. 전체 거리의 20%를 걸었어요.",
    "prompt": "관람차까지 더 걸을 거리는 얼마일까요?",
    "choices": [
      "800m · 0.8km",
      "200m · 0.2km",
      "800m · 8km"
    ],
    "answer": 0,
    "explain": [
      "20%를 걸었으니 전체 거리의 80%가 남아요.",
      "1000m의 10%는 100m이고, 80%는 그 8배인 800m예요.",
      "1000m가 1km이므로 800m는 0.8km예요."
    ],
    "total": 1000,
    "percent": 80,
    "baseUnit": "m",
    "result": 800,
    "convertValue": 0.8,
    "convertUnit": "km",
    "visualLabel": "관람차까지 남은 길"
  },
  {
    "id": "distance-11",
    "course": "distance",
    "level": 2,
    "emoji": "🐬",
    "title": "돌고래 배 여행",
    "story": "돌고래를 보러 배로 5000m를 가요. 전체 거리의 40%를 갔어요.",
    "prompt": "앞으로 더 갈 거리는 얼마일까요?",
    "choices": [
      "2000m · 2km",
      "3000m · 3km",
      "3000m · 30km"
    ],
    "answer": 1,
    "explain": [
      "40%를 갔으니 전체 거리의 60%가 남아요.",
      "5000m의 10%는 500m이고, 60%는 그 6배인 3000m예요.",
      "1000m가 1km이므로 3000m는 3km예요."
    ],
    "total": 5000,
    "percent": 60,
    "baseUnit": "m",
    "result": 3000,
    "convertValue": 3,
    "convertUnit": "km",
    "visualLabel": "배가 더 갈 길"
  },
  {
    "id": "distance-12",
    "course": "distance",
    "level": 2,
    "emoji": "🦄",
    "title": "유니콘 우체국",
    "story": "유니콘 우체국까지의 길은 5000m예요. 전체 거리의 80%를 달렸어요.",
    "prompt": "우체국까지 남은 거리는 얼마일까요?",
    "choices": [
      "4000m · 4km",
      "1000m · 10km",
      "1000m · 1km"
    ],
    "answer": 2,
    "explain": [
      "80%를 달렸으니 전체 거리의 20%가 남아요.",
      "5000m의 10%는 500m이고, 20%는 그 2배인 1000m예요.",
      "1000m는 1km와 같아요."
    ],
    "total": 5000,
    "percent": 20,
    "baseUnit": "m",
    "result": 1000,
    "convertValue": 1,
    "convertUnit": "km",
    "visualLabel": "우체국까지 남은 길"
  },
  {
    "id": "mix-07",
    "course": "mix",
    "level": 1,
    "emoji": "🎊",
    "title": "파티 준비 시작",
    "story": "길이가 200cm인 장식 끈을 준비했어요. 아직 하나도 쓰지 않았어요.",
    "prompt": "남아 있는 장식 끈의 길이는 얼마일까요?",
    "choices": [
      "0cm · 0m",
      "100cm · 1m",
      "200cm · 2m"
    ],
    "answer": 2,
    "explain": [
      "하나도 쓰지 않았으니 전체인 100%가 남아요.",
      "처음 있던 200cm가 그대로 있어요.",
      "100cm가 1m이므로 200cm는 2m예요."
    ],
    "total": 200,
    "percent": 100,
    "baseUnit": "cm",
    "result": 200,
    "convertValue": 2,
    "convertUnit": "m",
    "visualLabel": "그대로 남은 장식 끈"
  },
  {
    "id": "mix-08",
    "course": "mix",
    "level": 1,
    "emoji": "🍿",
    "title": "영화와 팝콘",
    "story": "가족과 나누어 먹을 팝콘이 1000g 있어요. 영화를 보며 팝콘을 전부 먹었어요.",
    "prompt": "남은 팝콘의 무게는 얼마일까요?",
    "choices": [
      "500g · 0.5kg",
      "0g · 0kg",
      "1000g · 1kg"
    ],
    "answer": 1,
    "explain": [
      "전체인 100%를 다 먹었으니 남은 비율은 0%예요.",
      "팝콘이 남아 있지 않으니 0g이에요.",
      "0g은 킬로그램으로 나타내도 0kg이에요."
    ],
    "total": 1000,
    "percent": 0,
    "baseUnit": "g",
    "result": 0,
    "convertValue": 0,
    "convertUnit": "kg",
    "visualLabel": "남은 팝콘"
  },
  {
    "id": "mix-09",
    "course": "mix",
    "level": 1,
    "emoji": "🚗",
    "title": "할머니 댁",
    "story": "할머니 댁까지 자동차로 가는 거리는 6000m예요. 전체 거리의 절반을 갔어요.",
    "prompt": "할머니 댁까지 남은 거리는 얼마일까요?",
    "choices": [
      "3000m · 3km",
      "3000m · 30km",
      "6000m · 6km"
    ],
    "answer": 0,
    "explain": [
      "절반을 갔으니 전체 거리의 50%가 남아요.",
      "6000m의 절반은 3000m예요.",
      "1000m가 1km이므로 3000m는 3km예요."
    ],
    "total": 6000,
    "percent": 50,
    "baseUnit": "m",
    "result": 3000,
    "convertValue": 3,
    "convertUnit": "km",
    "visualLabel": "할머니 댁까지 남은 길"
  },
  {
    "id": "mix-10",
    "course": "mix",
    "level": 2,
    "emoji": "👑",
    "title": "종이 왕관",
    "story": "길이가 100cm인 종이띠가 있어요. 왕관을 만드는 데 전체 길이의 40%를 썼어요.",
    "prompt": "남은 종이띠의 길이는 얼마일까요?",
    "choices": [
      "40cm · 0.4m",
      "60cm · 0.6m",
      "60cm · 6m"
    ],
    "answer": 1,
    "explain": [
      "40%를 썼으니 전체의 60%가 남아요.",
      "100cm의 60%는 60cm예요.",
      "100cm가 1m이므로 60cm는 0.6m예요."
    ],
    "total": 100,
    "percent": 60,
    "baseUnit": "cm",
    "result": 60,
    "convertValue": 0.6,
    "convertUnit": "m",
    "visualLabel": "남은 왕관 종이"
  },
  {
    "id": "mix-11",
    "course": "mix",
    "level": 2,
    "emoji": "🍌",
    "title": "바나나 간식",
    "story": "껍질을 벗긴 바나나가 1000g 있어요. 전체 무게의 60%를 먹었어요.",
    "prompt": "남은 바나나의 무게는 얼마일까요?",
    "choices": [
      "600g · 0.6kg",
      "400g · 4kg",
      "400g · 0.4kg"
    ],
    "answer": 2,
    "explain": [
      "60%를 먹었으니 전체의 40%가 남아요.",
      "1000g의 10%는 100g이고, 40%는 그 4배인 400g이에요.",
      "1000g이 1kg이므로 400g은 0.4kg이에요."
    ],
    "total": 1000,
    "percent": 40,
    "baseUnit": "g",
    "result": 400,
    "convertValue": 0.4,
    "convertUnit": "kg",
    "visualLabel": "남은 바나나"
  },
  {
    "id": "mix-12",
    "course": "mix",
    "level": 2,
    "emoji": "🌻",
    "title": "해바라기 정원",
    "story": "해바라기 정원까지의 길은 5000m예요. 전체 거리의 20%를 갔어요.",
    "prompt": "정원까지 더 갈 거리는 얼마일까요?",
    "choices": [
      "4000m · 4km",
      "1000m · 1km",
      "4000m · 40km"
    ],
    "answer": 0,
    "explain": [
      "20%를 갔으니 전체 거리의 80%가 남아요.",
      "5000m의 10%는 500m이고, 80%는 그 8배인 4000m예요.",
      "1000m가 1km이므로 4000m는 4km예요."
    ],
    "total": 5000,
    "percent": 80,
    "baseUnit": "m",
    "result": 4000,
    "convertValue": 4,
    "convertUnit": "km",
    "visualLabel": "정원까지 남은 길"
  }
];
