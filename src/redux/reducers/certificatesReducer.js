const initialState = [
  {id: 0, name: "Онлайн курс по JavaScript", image: "https://www.sololearn.com/certificates/course/en/20324776/1024/landscape/png", link: "https://www.sololearn.com/Certificate/1024-20324776/pdf/"},
  {id: 1, name: `НИЯУ МИФИ сертификат участника Семинара-практикума "Курс олимпиадной физики для школьников"`, image: "https://lh3.googleusercontent.com/Ccu6lun2sCfndhERARw5-gow7JecfN_mx507ljNVZLbcPMU6v1mKUcEwg3V6hdmWN5-wvPHpXAXa-ICgeYoFL66GZIuPRISYq-C4ysywSZul2v-PVMHyPx3QAQVjIJyXAYqBqF7YzPuPH_AZgBRWrSbz-b-xJxPguypdkJ1_NqKBjZjH4Q8mB49pPd25_QfIJR6J6GIBGHayupmcLxGKYRqI9U59cauYYLi8v3Bgg4L7DRmcOVpqqBZUkWok--pIEfVfRj4hN5lx8HXJ-lRMTNXK2g10tabKjXjJjmI1Qt87Z6AwT1N1o0VufX5YPKSwEw3XE4JPuwzQSgeBJNQA9Vuh3UuA4N5lMgddOwT7n7WuP1-JF1zBwvsbQJSH_-AHtErDnJnKDFAdqT5vKHDB2Deo-9EfeGbc7ADonw1NQgUpua3hENWSOvBLXcwmzg-PRWsJ37EWukheYSlQNoFzoF36kdPHmfAKj3_Ndz7Ml0GbfKa8_ybay4d_hyPWGpLHiG4yoto0KI_PZS6TvLKvECbUxM2jq_bcU3PJJrZUhdmbsR-VO0yu7VfIBLr-T7UMCh2t1TNelmCMvqyXKFqv1-DHBUlFeNy--0H7a9Rziu3ILRglhjI9cg84VTv9bXatH1HEaXl7X1_dLz-wiSJgEcYXegSGX3yDoo1850LkAgwxtlzCm7X1y4O9qoedb-UizVbNbVU4dmnxgXWFpUUqGEk=w639-h903-no?authuser=0", link: "https://drive.google.com/file/d/1yqd7PVa9wkvpRCmGCVuxhFjrcfWz_Qvu/view?usp=sharing"},
  {id: 2, name: "Онлайн курс по HTML", image: "https://www.sololearn.com/certificates/course/en/20324776/1014/landscape/png", link: "https://www.sololearn.com/Certificate/1014-20324776/pdf/"},
  {id: 3, name: "Онлайн курс по CSS", image: "https://www.sololearn.com/certificates/course/en/20324776/1023/landscape/png", link: "https://www.sololearn.com/Certificate/1023-20324776/pdf/"},
  {id: 4, name: `НИЯУ МИФИ сертификат участника Семинара-практикума "Курс олимпиадной математики для школьников`, image: "https://lh3.googleusercontent.com/87hHIZxCL72YDmkbeX9nvpXHMVrvAmY9zSv_5Zy8VMNU7-OfdP_aLTbctab5XA5YJ0F-kdMjEYCQffkJBGJXtVRng6kI8U6wBhAj8lRPdmOJR2O7iKKuHeu-ltTJpaiSoYuP4lGfBpkGyNyeFRvAA-5BOmTWXwVwByT-2JTNkRPNCZiiVVkBVWqLEcLuo8mbrY_09NNa-Ik8S7Xm5bj9uQRxrPJbbJmH3loh5ZzQ6pLFUsQaYKIPkPtyBwyash_UvGl2LnNNv0gEjVcATH7A8LMwCgN81lxCYg5Y9TJ5MNnuRXPIgR2UEeV7ni61rkwOAFTryscqs2GTc7C4P1fZYh-KzEBHQUE3IhN_B3loDzHYPZ6ENo6-jXHDSrlLBVvDKk7WPUmlIc6VQ8t7lfTUsT8tc6oOWihMMw3Rs7YXY_AN7fCBxGTgpjtHzAL12muNZ8LotU5n-LZpPr0iyV8-YAAB-SMhDE_nyeUaTSzzgW86cW2WL6FQOYlviQDu6Rs2PWSqxpABrQGHPQXgppFjvH7BVO3Ebe-JZIbXK_fmqtOmVWrmOwtplVtn7eGfOzy9TnJ9cWFxajo6EKX5uSOq1gwlLO6er3nLaUNqTl5jbNIltqG9zTSfQddxtuSBjKdhuoFoL8Sx2HAVdMmEXNYlfonRqMOAgezhVeZwvUDUby9TrZWzQsbbJ3H226-FUTS1-Z2uTFGFRi8txI10L6FFjTc=w639-h903-no?authuser=0", link: "https://drive.google.com/file/d/1pWIURdJAmIHydgYEieqCB5sX0npaC-c5/view?usp=sharing"},
];

const certificatesReducer = (state=initialState, {type}) => {
  switch(type){
    default: {
      return state;
    }
  }
}

export default certificatesReducer;