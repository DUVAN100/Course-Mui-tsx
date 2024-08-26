import React from 'react'
import { Stack, ImageList, ImageListItem } from '@mui/material'
import { title } from 'process'
export const MuiImageList = () => {
    const itemData = [
        {
            img:"https://unsplash.com/photos/a-narrow-canyon-with-a-waterfall-in-the-middle-l1-m6zzUv0A",
            title:"cave"
        },
        {
            img:"https://unsplash.com/photos/a-view-of-the-night-sky-from-a-cave-QP9f-kTfTRk",
            title:"stars"
        },
        {
            img:"https://unsplash.com/photos/a-narrow-canyon-with-a-waterfall-in-the-middle-l1-m6zzUv0A",
            title:"cave"
        },
        {
            img:"https://unsplash.com/photos/a-view-of-the-night-sky-from-a-cave-QP9f-kTfTRk",
            title:"stars"
        },
        {
            img:"https://unsplash.com/photos/a-narrow-canyon-with-a-waterfall-in-the-middle-l1-m6zzUv0A",
            title:"cave"
        },
        {
            img:"https://unsplash.com/photos/a-view-of-the-night-sky-from-a-cave-QP9f-kTfTRk",
            title:"stars"
        }
    ]
  return (
    <Stack spacing={4}>
        <ImageList sx={{height:500, width:500}} cols={3} rowHeight={164}>
            {itemData &&
                itemData.map((item) => (
                    <ImageListItem key={item.title}>
                        <img src={item.img} alt={item.title} />
                        <Stack sx={{textAlign: 'center' }}>
                            <div>{item.title}</div>
                        </Stack>
                    </ImageListItem>
                ))
            }
        </ImageList>
    </Stack>
  )
}
