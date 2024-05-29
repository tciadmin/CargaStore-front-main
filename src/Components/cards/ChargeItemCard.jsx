import { Grid } from '@mui/material'
import React from 'react'

const ChargeItemCard = ({id, title, weight, country, dates, typeCharge, driver, requests = ""}) => {
    return (
        <Grid container justifyContent={"center"} alignItems={"center"} style={{ minWidth: "1000px", height: "75px", background: "white" }} spacing={.5}>
            <Grid item container width={"11.1%"} direction="row" justifyContent="center"
                alignItems="center" >
                <p style={{ fontSize: "12px", fontWeight: 500, marginLeft: "3px" }}>{id}</p>
            </Grid>
            <Grid item container width={"11.1%"} direction="row" justifyContent="center"
                alignItems="center" >

                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2838 8.94189H8.21887C8.0062 8.95052 7.80437 9.03807 7.65276 9.18746C7.50114 9.33685 7.41063 9.53738 7.39887 9.7499L6.18087 18.4999C6.16347 18.6204 6.17137 18.7432 6.20408 18.8604C6.23678 18.9777 6.29357 19.0869 6.37082 19.181C6.44807 19.2751 6.54409 19.352 6.65274 19.4069C6.76139 19.4618 6.8803 19.4935 7.00187 19.4999H17.5018C17.6234 19.4935 17.7423 19.4618 17.851 19.4069C17.9596 19.352 18.0556 19.2751 18.1329 19.181C18.2101 19.0869 18.2669 18.9777 18.2996 18.8604C18.3323 18.7432 18.3402 18.6204 18.3228 18.4999L17.1048 9.7499C17.0931 9.53722 17.0024 9.33656 16.8506 9.18715C16.6988 9.03773 16.4967 8.95028 16.2838 8.94189Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 0.75H21.5C21.5 0.75 23.5 0.75 23.5 2.75V21.25C23.5 21.25 23.5 23.25 21.5 23.25H3C3 23.25 1 23.25 1 21.25V2.75C1 2.75 1 0.75 3 0.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.25 8.94191H9.25V7.44189C9.25 6.64625 9.56607 5.88318 10.1287 5.32057C10.6913 4.75797 11.4544 4.44189 12.25 4.44189C13.0456 4.44189 13.8087 4.75797 14.3713 5.32057C14.9339 5.88318 15.25 6.64625 15.25 7.44189V8.94191Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p style={{ fontSize: "12px", fontWeight: 500, marginLeft: "3px" }}>{title}</p>
            </Grid>
            <Grid item container width={"11.1%"} direction="row" justifyContent="center"
                alignItems="center"  >
                <svg width="20" height="20" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1317_3847)">
                        <path d="M14.7656 9.34031C14.7653 9.42789 14.7416 9.51379 14.6969 9.58911C14.6523 9.66445 14.5883 9.72647 14.5116 9.76875C14.4338 9.81156 14.3463 9.83345 14.2576 9.8323C14.1688 9.83115 14.0819 9.80699 14.0053 9.76219L11.25 8.48437L8.46844 9.83531C8.39172 9.87442 8.30635 9.89347 8.22029 9.89068C8.13423 9.8879 8.05028 9.86336 7.97625 9.81937C7.90286 9.77624 7.84197 9.71475 7.79956 9.64094C7.75715 9.56714 7.73468 9.48356 7.73438 9.39844V1.45312H14.7656V9.34031Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.1719 19.7344V14.1094" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.3594 19.7342V18.4414" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.5469 19.7341V14.3145" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.10938 1.45312H20.3906C20.3906 1.45312 21.7969 1.45312 21.7969 2.85938V21.1406C21.7969 21.1406 21.7969 22.5469 20.3906 22.5469H2.10938C2.10938 22.5469 0.703125 22.5469 0.703125 21.1406V2.85938C0.703125 2.85938 0.703125 1.45312 2.10938 1.45312Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.3594 16.1491V14.3145" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.9844 19.5291V18.2363" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.9844 15.9441V14.1094" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1317_3847">
                            <rect width="22.5" height="22.5" fill="white" transform="translate(0 0.75)" />
                        </clipPath>
                    </defs>
                </svg>
                <p style={{ fontSize: "12px", fontWeight: 500, marginLeft: "3px" }}>{weight}</p>
            </Grid>
            <Grid item container width={"11.1%"} direction="row" justifyContent="center"
                alignItems="center" >
                <svg width="20" height="20" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1317_6669)">
                        <path d="M5.625 9.89062C5.625 11.3825 6.21763 12.8132 7.27252 13.8681C8.32742 14.923 9.75816 15.5156 11.25 15.5156C12.7418 15.5156 14.1726 14.923 15.2274 13.8681C16.2824 12.8132 16.875 11.3825 16.875 9.89062C16.875 8.39878 16.2824 6.96804 15.2274 5.91315C14.1726 4.85826 12.7418 4.26562 11.25 4.26562C9.75816 4.26562 8.32742 4.85826 7.27252 5.91315C6.21763 6.96804 5.625 8.39878 5.625 9.89062Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.375 7.0791H7.73437C8.10734 7.0791 8.46503 7.22725 8.72874 7.49098C8.99247 7.7547 9.14062 8.11239 9.14062 8.48535V9.1416C9.14064 9.3731 9.19781 9.60101 9.30706 9.80512C9.41634 10.0092 9.57422 10.1832 9.76688 10.3116L10.665 10.9107C10.8452 11.0304 10.993 11.1929 11.0953 11.3837C11.1975 11.5743 11.251 11.7874 11.251 12.0038C11.251 12.2202 11.1975 12.4332 11.0953 12.624C10.993 12.8147 10.8452 12.9771 10.665 13.0969L8.29219 14.6757" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.1254 7.0791H15.4691C15.2294 7.07903 14.9936 7.14025 14.7842 7.25696C14.5748 7.37368 14.3986 7.542 14.2725 7.74594C14.1465 7.94988 14.0747 8.18266 14.0639 8.42217C14.0531 8.66169 14.1038 8.89998 14.211 9.11441C14.6113 9.91504 14.7032 9.95348 14.9516 10.1025L16.7329 11.1694" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.6875 9.89062C19.6875 17.2969 13.1888 21.4509 11.5978 22.3594C11.4917 22.4197 11.3717 22.4515 11.2495 22.4515C11.1274 22.4515 11.0074 22.4197 10.9013 22.3594C9.31031 21.45 2.8125 17.295 2.8125 9.89062C2.8125 7.65286 3.70145 5.50675 5.28379 3.92441C6.86613 2.34207 9.01223 1.45312 11.25 1.45312C13.4877 1.45312 15.6338 2.34207 17.2163 3.92441C18.7986 5.50675 19.6875 7.65286 19.6875 9.89062Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1317_6669">
                            <rect width="22.5" height="22.5" fill="white" transform="translate(0 0.75)" />
                        </clipPath>
                    </defs>
                </svg>
                <p style={{ fontSize: "12px", fontWeight: 500, marginLeft: "3px" }}>{country}</p>
            </Grid>
            <Grid item container width={"11.1%"} direction="row" justifyContent="center"
                alignItems="center" >
                <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03125 0.6875C6.54902 0.6875 6.96875 1.10723 6.96875 1.625V2.5625H13.5312V1.625C13.5312 1.10723 13.951 0.6875 14.4688 0.6875C14.9865 0.6875 15.4062 1.10723 15.4062 1.625V2.58564C17.775 2.82083 19.625 4.81937 19.625 7.25V15.6875C19.625 18.2763 17.5263 20.375 14.9375 20.375H5.5625C2.97367 20.375 0.875 18.2763 0.875 15.6875V7.25C0.875 4.81937 2.72501 2.82083 5.09375 2.58564V1.625C5.09375 1.10723 5.51348 0.6875 6.03125 0.6875ZM2.91004 6.3125H17.59C17.2039 5.22013 16.1621 4.4375 14.9375 4.4375H5.5625C4.33792 4.4375 3.29613 5.22013 2.91004 6.3125ZM17.75 8.1875H2.75V15.6875C2.75 17.2408 4.0092 18.5 5.5625 18.5H14.9375C16.4908 18.5 17.75 17.2408 17.75 15.6875V8.1875Z" fill="black" />
                </svg>
                <p style={{ width: "80px",fontSize: "12px", fontWeight: 500, marginLeft: "3px" }}>{dates}</p>
            </Grid>
            <Grid item container width={"11.1%"} direction="row" justifyContent="center"
                alignItems="center" >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1317_6675)">
                        <path d="M15.6211 9.34031C15.6208 9.42789 15.5971 9.51379 15.5524 9.58911C15.5077 9.66445 15.4437 9.72647 15.367 9.76875C15.2893 9.81156 15.2018 9.83345 15.1131 9.8323C15.0243 9.83115 14.9374 9.80699 14.8608 9.76219L12.1055 8.48437L9.32391 9.83531C9.24719 9.87442 9.16182 9.89347 9.07576 9.89068C8.9897 9.8879 8.90574 9.86336 8.83172 9.81937C8.75833 9.77624 8.69744 9.71475 8.65503 9.64094C8.61262 9.56714 8.59015 9.48356 8.58984 9.39844V1.45312H15.6211V9.34031Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.0273 19.7344V14.1094" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.2148 19.7342V18.4414" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.4023 19.7341V14.3145" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.96484 1.45312H21.2461C21.2461 1.45312 22.6523 1.45312 22.6523 2.85938V21.1406C22.6523 21.1406 22.6523 22.5469 21.2461 22.5469H2.96484C2.96484 22.5469 1.55859 22.5469 1.55859 21.1406V2.85938C1.55859 2.85938 1.55859 1.45312 2.96484 1.45312Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.2148 16.1491V14.3145" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.8398 19.5291V18.2363" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.8398 15.9441V14.1094" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1317_6675">
                            <rect width="22.5" height="22.5" fill="white" transform="translate(0.855469 0.75)" />
                        </clipPath>
                    </defs>
                </svg>
                <p style={{ fontSize: "12px", fontWeight: 500, marginLeft: "3px" }}>{typeCharge}</p>
            </Grid>
            <Grid item container width={"11.1%"} direction="row" justifyContent="center"
                alignItems="center" >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1317_2568)">
                        <path d="M3.69922 8.13281C3.69922 9.15846 4.10666 10.1421 4.83189 10.8673C5.55713 11.5926 6.54076 12 7.56641 12C8.59205 12 9.57568 11.5926 10.3009 10.8673C11.0262 10.1421 11.4336 9.15846 11.4336 8.13281C11.4336 7.10717 11.0262 6.12353 10.3009 5.39829C9.57568 4.67306 8.59205 4.26562 7.56641 4.26562C6.54076 4.26562 5.55713 4.67306 4.83189 5.39829C4.10666 6.12353 3.69922 7.10717 3.69922 8.13281Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.23828 19.7344C1.23828 18.0561 1.90499 16.4465 3.09175 15.2597C4.2785 14.073 5.88808 13.4062 7.56641 13.4062C9.24473 13.4062 10.8543 14.073 12.0411 15.2597C13.2278 16.4465 13.8945 18.0561 13.8945 19.7344" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.9922 10.2422C13.9922 11.0813 14.3255 11.8861 14.9189 12.4795C15.5122 13.0729 16.317 13.4062 17.1562 13.4062C17.9954 13.4062 18.8002 13.0729 19.3935 12.4795C19.9869 11.8861 20.3202 11.0813 20.3202 10.2422C20.3202 9.40302 19.9869 8.59823 19.3935 8.00485C18.8002 7.41148 17.9954 7.07812 17.1562 7.07812C16.317 7.07812 15.5122 7.41148 14.9189 8.00485C14.3255 8.59823 13.9922 9.40302 13.9922 10.2422Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.3594 14.8763C16.1423 14.5877 16.9832 14.4926 17.8108 14.5989C18.6384 14.7051 19.428 15.0097 20.1127 15.4867C20.7973 15.9637 21.3565 16.599 21.7428 17.3385C22.1291 18.0781 22.3311 18.9 22.3316 19.7344" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1317_2568">
                            <rect width="22.5" height="22.5" fill="white" transform="translate(0.535156 0.75)" />
                        </clipPath>
                    </defs>
                </svg>
                <p style={{ width: "80px", fontSize: "12px", fontWeight: 500, marginLeft: "3px" }}>{driver}</p>
            </Grid>
            <Grid item container width={"11.1%"} direction="row" justifyContent="center"
                alignItems="center" >
                    {requests != "" && 
                                    <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_226_5711)">
                        <path d="M2.53516 11.5C2.53516 14.2848 3.64141 16.9555 5.61054 18.9246C7.57967 20.8938 10.2504 22 13.0352 22C15.82 22 18.4907 20.8938 20.4598 18.9246C22.429 16.9555 23.5352 14.2848 23.5352 11.5C23.5352 8.71523 22.429 6.04451 20.4598 4.07538C18.4907 2.10625 15.82 1 13.0352 1C10.2504 1 7.57967 2.10625 5.61054 4.07538C3.64141 6.04451 2.53516 8.71523 2.53516 11.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.0352 11.5V7.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.0352 11.5L17.7222 16.188" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_226_5711">
                            <rect width="24" height="24" fill="white" transform="translate(0.535156)" />
                        </clipPath>
                    </defs>
                </svg>
                    }

                <p style={{ width: "80px", fontSize: "12px", fontWeight: 500, marginLeft: "3px" }}>{requests}</p>
            </Grid>
            <Grid item container width={"11.1%"} direction="row" justifyContent="center"
                alignItems="center" >
                <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2018 7C20.2018 10.3133 16.0232 13 10.8685 13C5.71382 13 1.53516 10.3133 1.53516 7C1.53516 3.68667 5.71382 1 10.8685 1C16.0232 1 20.2018 3.68667 20.2018 7Z" stroke="#007C52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2032 7.00047C13.232 7.8529 12.7937 8.65321 12.0599 9.08797C11.3261 9.52272 10.4136 9.52272 9.67979 9.08797C8.94599 8.65321 8.50767 7.8529 8.5365 7.00047C8.50767 6.14804 8.94599 5.34773 9.67979 4.91298C10.4136 4.47823 11.3261 4.47823 12.0599 4.91298C12.7937 5.34773 13.232 6.14804 13.2032 7.00047V7.00047Z" stroke="#007C52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>            </Grid>

        </Grid>
    )
}

export default ChargeItemCard