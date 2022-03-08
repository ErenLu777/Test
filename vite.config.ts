/*
 * @Author: Eren Lu
 * @Date: 2022-03-08 14:21:20
 * @LastEditors: Eren Lu
 * @LastEditTime: 2022-03-08 15:11:31
 * @FilePath: \Eren_testd:\Users\Administrator\Desktop\CICD\init\vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by Eren Lu, All Rights Reserved. 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [vue()]
})
