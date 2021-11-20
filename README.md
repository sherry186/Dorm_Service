# Dorm_Service

## 一、 啟動後端
### Setup
進入 Dorm_Service_Backend 後：
1. 創建虛擬環境 
    - (windows)：python3 -m venv dorm_service
    - (macOS) : python3 -m venv dorm_service
2. 進入虛擬環境
    - (windows)：dorm_service/Scripts/activate
    - (macOS) : source dorm_service/bin/activate
3. 安裝所需套件：pip install -r requirements.txt

### Run the server
進入 Dorm_Service_Backend 後：
1. 進入虛擬環境
    - (windows)：dorm_service/Scripts/activate
    - (macOS) : source dorm_service/bin/activate
2. cd App
3. uvicorn main:app --reload
4. uvicorn 會替 FastAPI 開啟 server，接著上 localhost:8000/docs，如果可以看到 APIs 就成功了！

### 連結資料庫
現階段的連線都是用 Localhost <br>
所以沒有辦法共用一個 postgresql 更新資料<br>
現階段先麻煩大家連線到自己的 local host。
前置作業如下：<br>
1. 要先在自己的 postgresql new database (取名為 dorm_service)
2. 將 Dorm_Service_Backend/App/database.py 內的 engine 改成自己的密碼

## 二、 載入資料庫
### db setup(restore)
1. 首先先建立一個 db 叫做 dorm_service
![](https://i.imgur.com/uhqnTZL.png)
2. 點擊 dorm_service/Schemas/public 右鍵，並點選 "Restore"，如果跳錯請看[下方](###如果點擊"restore"時跳錯要怎麼解)
![](https://i.imgur.com/yk8XHG7.png)
3. 選擇檔案路徑-> 在 Dorm_Service/Dorm_Service_Backend 點擊 dormDB 這個 custom 檔案後按下 "Select" 按鈕
![](https://i.imgur.com/9xrq6nA.png)
![](https://i.imgur.com/iESySj0.png)
4. 最後按下 "Restore" 這個按鈕就可以成功建立所有 table
![](https://i.imgur.com/A630tzO.png)

### db backup
1. 點擊 dorm_service/Schemas/public 右鍵，並點選 "Backup"
![](https://i.imgur.com/A4uMUT9.png)
2. `Filename` 要填寫完整存檔路徑，`Format` 要選擇 Custom，其他都不用填寫，直接按 "Backup" 按鈕即可
![](https://i.imgur.com/32o9zD9.png)


### 如果點擊"restore"時跳錯要怎麼解
1. 請參考這個[網站](https://dba.stackexchange.com/questions/149169/binary-path-in-the-pgadmin-preferences )
2. 因為 postgersql 有更改過頁面，所以可以參考下方設定，另外，要記得將版本號更改為 14 
![](https://i.imgur.com/Wrcy1Bh.png)

## 三、 啟動前端
### Run the server
有兩種方法  
1. 在 DORM_SERVICE 目錄下 yarn start
2. cd Dorm_Service_Frontend/frontend
3. yarn/npm start
