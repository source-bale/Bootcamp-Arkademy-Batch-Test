function myBiodata(biodata){
  let biodataObj = {
    "name": 'Muhammad Iqbal',
    "address": 'Desa Kubang Jaya, Pekanbaru',
    "hobbies": [
      'Fotografi', 'Travelling', 'Gaming', 'Fishing' 
    ],
    "is_married": false,
    "list_school": {
      "highschool": 'SMK Nasional Al-Huda',
      "year_in": '2015',
      "year_out": '2017',
     "Major": 'Teknik Komputer Jaringan',
    },
    "skill_name": [
      {    
        "Adobe Photoshop Lightroom": "advanced",
        "Javascript": "beginner",
        "GIT": "beginner",
        "Android Studio": "beginner",
      },
     { "interesting_in_coding": true, }
    ]
  }

  return biodataObj
}
console.log(myBiodata('iqbal'));