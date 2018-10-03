
//    function player(){
//        function getJump()
//        {
//            return jump;
//        };
//        function getbx()
//        {
//            return bx;
//        };
//        function getby()
//        {
//            return by;
//        };
//        function getPlayerWidth()
//        {
//            return this.playerWidth;
//        };
//        function getPlayerHeight()
//        {
//            return this.playerHeight;
//        };
//        function getPos()
//        {
//            return this.pos;
//        };
//
//    }
    
//    function enemy()
//    {
//        this.enemyWidth=50;
//        this.enemyHeight=109;
//        function getEnemyHeight()
//        {
//          return this.enemyHeight;  
//        };
//        function getEnemyWidth()
//        {
//          return this.enemyWidth;  
//        };
//    
//    }
    var canvas=document.getElementsByTagName("canvas")[0];
          var context = canvas.getContext("2d");

//          var canvas2=document.getElementById("can");
//          var context2 = canvas2.getContext("2d");
//    
    function main(ctx){
          this.context=ctx;
          this.car=new Image();
          this.car2=new Image();
		  this.car3=new Image()
          this.bg=new Image();
          this.shoot=new Image();
          var jump=75;

        var bx=110;
        var by=500;
        this.playerWidth=50;
        this.playerHeight=106;
        this.pos=[110,190,265,340];
        
        this.enemyWidth=50;
        this.enemyHeight=109;
        
//          this.newPlayer=new player();
//          bx=this.newPlayer.getbx();
//          by=this.newPlayer.getby();
//          this.playerHeight=this.newPlayer.getPlayerHeight();
//          this.playerwidth=this.newPlayer.getPlayerwidth();
//          jump=this.newPlayer.getJump();
////        
//          this.newEnemy=new enemy();
//          this.enemyHeight=this.newPlayer.getEnemyHeight();
//          this.enemyWidth=this.newPlayer.getEnemyWidth();
          this.enemy=[];
        
          this.screenCount=1;
        
          this.yInt=0;
          this.yInt2=386;
          this.dy=by;
        
        this.car.src="images/car1.png";
        this.car2.src="images/car3.png";
		this.car3.src="images/car2.png";
        this.bg.src="images/background.jpg";
        this.shoot.src="images/boom.png";


        
          this.keyLog;
        
        

        document.addEventListener("keydown",shiftCar)

        function shiftCar(event){
           
            console.log(event);
            if(event.code==="ArrowRight")
            {
                if(bx<265)
                {
                bx=bx+jump;
                }
            }
            else if (event.code==="ArrowLeft")
            {
                if(bx>110)
                {
                      bx=bx-jump;
                }
            }
			else if(event.code==="ArrowUp")
			{
				if(by>0)
				{
					by=by-20;
				}
			}
			else if(event.code==="ArrowDown")
			{
				if(by<500)
				{
					by=by+20;
				}
			}
//            if(event.code==="Space")
//            {
//                keyLog=event.code;
//            }
//            
        }


        
        
        
        this.enemy[0]=
        {
            x:265,
            y:50,
            dead:0,
			carno:randomRange(1,10),
			velocity:randomRange(1,10)
        }
        
        function randomRange(x,y)
        {
            return Math.floor(Math.random()*(y-x)+x);
        }
        
        function draw(){
            
          
            context.drawImage(this.bg,0,this.yInt++);
            context.drawImage(this.bg,0,this.yInt-386);
            
            if(this.yInt==386){
                console.log(this.yInt);
                this.yInt=this.yInt-386;
            }
            context.drawImage(this.bg,0,this.yInt2++);
            context.drawImage(this.bg,0,this.yInt-386);
            
            if(this.yInt2==386){
                console.log(this.yInt2);
                this.yInt2=this.yInt2-386;
            }
//            if(keyLog==="Space")
//                {
//                    
//                    context.drawImage(shoot,bx,dy--);
//                }
//            if(dy<=0){
//                dy=by;
//                keyLog=null;
//            }
//           
            context.drawImage(this.car,bx,by);  //110  190   265  340


            checkCollision();
			
					
          
            for(  i=0;i<this.enemy.length;i++)
            {
                if(this.enemy[i]==null){
                    continue;
                }
                if(this.enemy[i].y>772){
                    this.enemy.splice(i,1);
                }
                
				console.log(this.enemy);
				  this.enemyCar;
				console.log(this.enemy[i].carno);
                
				  this.lane=Math.floor(Math.random()*4)+0;
                for(j=0;j<this.enemy.length;j++){
                    if(this.enemy[i]==this.enemy[j]){
                        continue;
                    }
				    if(this.enemy[j].y===this.enemy[i].y && this.lane===this.enemy[j])
				    {
                        this.lane=Math.floor(Math.random()*4)+0;
				        j=0;
				    }
                    
                    if(this.enemy[j].x==this.enemy[i].x && this.enemy[j].y+this.enemyHeight<=this.enemy[i].y){
                        this.enemy.splice(j,1);
                        j=0;
                    }
                    if(this.enemy[j].y>772){
                    this.enemy.splice(j,1);
                }
                            
                    
						}
                if(this.enemy[i]==null){
                    continue;
                }
                
					if(this.enemy[i].carno==1 || this.enemy[i].carno==5 || this.enemy[i].carno==3){
						this.enemyCar=this.car3;
					}
					else{
						this.enemyCar=this.car2;
					}
                if(this.enemy[i].dead===0)
                {
					
					
                    context.drawImage(this.enemyCar,this.enemy[i].x,this.enemy[i].y);
                    this.enemy[i].y=this.enemy[i].velocity+this.enemy[i].y;

                    if(this.enemy[i].y==150 && this.enemy[i].dead===0)
                    {
                       // screenCount++;
                     //  createCount=(Math.floor(Math.random()*3)+1)
                      // console.log(createCount);
                       //for(  temp=0;temp<createCount;temp++)
                      // {
                            this.enemy.push({
                                x:pos[this.lane],
                                y:-200,
                                dead:0,
								carno:randomRange(1,10),
								velocity:randomRange(2,10)
                            })
							//console.log(enemy);
                      // }
                     
                    }
                    if(this.enemy.length>=6){
                        for(p=0;p<this.enemy.length;p++){
                            if(this.enemy[p].y>700){
                                this.enemy.splice(p,1);
                            }
                        }
                    }
                    if(this.enemy[i]==null){
                    continue;
                }
    
                    if(this.enemy[i].y>=772)
                    {
                      //  screenCount--;
                        this.enemy[i].dead=1;
                       
						this.enemy.splice(i,1);
                        
						this.enemy.push({
                                x:pos[lane],
                                y:-200,
                                dead:0,
								carno:randomRange(1,10),
								velocity:randomRange(2,10)
                            })
                        
                 }
                    
                } 
				
				
            }
        
            requestAnimationFrame(draw);
        }


        function checkCollision(){

                for (  i=0;i<this.enemy.length;i++)
                {
                    if(this.enemy[i].dead===0)
                    {
                        if (this.enemy[i].x < bx + this.playerWidth &&
                            this.enemy[i].x + this.enemyWidth > bx &&
                            this.enemy[i].y < by+ this.playerHeight &&
                            this.enemyHeight+ this.enemy[i].y > by) {
                             location.reload();
                         }
                    }
                }
        }
        draw();
    }

main(context);
