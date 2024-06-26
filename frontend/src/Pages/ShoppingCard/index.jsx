// import { Stack, Typography } from '@mui/material'
// import React from 'react'

// export default function ShoppingList() {
//   return (
//     <Stack>
//             {/* top  part for navs */}

//             <Stack alignItems={'center'} justifyContent={'start'} flexDirection={'row'} sx={{width:'80%' ,height:'10vh',marginX:'10%',borderBottom:'1px solid #81858b'} }>

//               <Typography variant='h5' sx={{marginX:'10px'}}>سبد خرید</Typography>

//                </Stack>

//             {/* bottom part for products and price */}

//           <Stack sx={{width:'80%' ,height:'10vh',background:'blue',marginX:'10%'}} flexDirection={'row'}>

//                     {/* product section */}

//                     <Stack sx={{width:'75%' }}></Stack>

//                     {/* price section  */}

//                     <Stack></Stack>

//           </Stack>

//     </Stack>
//   )
// }

import React from "react";
import {
  addItems,
  removeAll,
  removeItems,
  removeSingle,
} from "../../store/Slices/shoppList/shopCard";

import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Button,
  Container,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

export default function ShoppingList() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.cartSlice);
  let totalCost = 0;
console.log(list)
  return (
    <>
      <Typography
        variant="h3"
        display={"flex"}
        justifyContent={"center"}
        marginTop={"50px"}
        mx={"auto"}
        marginBottom={"20px"}
      >
        سبد خرید شما
      </Typography>
      <Container>
        <Stack
          width={"100%"}
          sx={{
            display: "flex",
            flexDirection: {
              sm: "column",
              md: "row",
            },
          }}
          gap={"20px"}
        >
          <Box
            sx={{
              width: {
                sm: "100%",
                md: "70%",
              },
              padding: "10px",
            }}
          >
            {list.map((e, index) => {
              totalCost = totalCost + e.quantity * e?.attributes?.price;
              return (
                <Stack
                  key={index}
                  direction={"row"}
                  marginY={"10px"}
                  padding={"10px"}
                  borderBottom={"1px solid rgba(0,0,0,.2)"}
                  justifyContent={"space-between"}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <img
                      src={
                        process.env.REACT_APP_BASE_URL +
                        e?.attributes?.image?.data?.attributes?.url
                      }
                      alt=""
                      style={{
                        borderRadius: "8px",
                        width: "120px",
                        height: "140px",
                      }}
                    />
                    <Box flexDirection={"column"}>
                      <Typography variant="h6" component={"p"}>
                        محصول: {e.attributes?.name}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          my: "15px",
                          justifyContent: "space-between",
                        }}
                      >
                     
                        <Typography variant="h4" component={"p"}>
                          {e.attributes?.price}$
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        color={"error"}
                        size="medium"
                        onClick={() => dispatch(removeSingle(e))}
                      >
                        <DeleteForeverOutlinedIcon />
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Stack direction={"row"} gap={"10px"}>
                      <Button
                        variant="contained"
                        size="small"
                        color="error"
                        onClick={() => dispatch(removeItems(e.id))}
                      >
                        <RemoveOutlinedIcon />
                      </Button>
                      <Typography variant="h6" component={"p"}>
                        {e.quantity}
                      </Typography>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ bgcolor: "black" }}
                        onClick={() => dispatch(addItems(e))}
                      >
                        <AddOutlinedIcon />
                      </Button>
                    </Stack>
                    <Stack direction={"row"} gap={"10px"}>
                      <Typography variant="h5" component={"p"}>
                        قیمت:
                      </Typography>
                      <Typography variant="h5" component={"p"}>
                        {e.quantity * Number(e.attributes?.price)}تومان
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              );
            })}
          </Box>
          <Box
            sx={{
              width: {
                sm: "100%",
                md: "30%",
              },
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              gap: "20px",
              alignItems: {
                sm: "center",
                md: "flex-start",
              },
            }}
          >
            <Typography mb={"20px"} variant="h5" component={"p"}>
            تخفیف
            </Typography>
            <Typography sx={{ fontWeight: "500" }} component={"p"}>
             کد تخفیف را وارد کنید؟
            </Typography>
            <Stack
              direction={"row"}
              mt={"10px"}
              gap={"20px"}
              alignItems={"center"}
            >
              <TextField sx={{ width: "60%" }} label="Code"></TextField>
              <Button
                variant="outlined"
                sx={{ color: "black", borderRadius: "15px", height: "55px" }}
              >
                اعمال
              </Button>
            </Stack>
            <Stack direction={"row"} mt={"20px"} gap={"150px"}>
              <Typography sx={{ fontWeight: "600" }} component={"p"}>
                Total Price:
              </Typography>
              <Typography sx={{ fontWeight: "600" }} component={"p"}>
                {totalCost}تومان  
              </Typography>
            </Stack>
            <Box mt={"20px"}>
              <Button
                variant="contained"
                color="error"
                sx={{ borderRadius: "50px", height: "60px" }}
                fullWidth
                onClick={() => dispatch(removeAll())}
              >
                خالی کردن سبد
              </Button>
              <Button
                sx={{
                  mt: "10px",
                  bgcolor: "black",
                  borderRadius: "50px",
                  height: "60px",
                }}
                variant="contained"
                fullWidth
              >
               تکمیل خرید 
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
