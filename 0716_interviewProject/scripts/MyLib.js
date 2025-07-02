function writeFile(text)

{
var lock = new java.util.concurrent.locks.ReentrantLock();
var date = context.variableManager.getValue("CurrentDate");

lock.lock();
                                             
var writer = new java.io.FileWriter("C:\\NeoLoad\\OutputFile\\TestFile2.csv",true);

//writer.write(date+";"+context.currentVU.id+";"+ text );

writer.write(date+","+context.currentVU.id+","+text );

writer.write("rn");

writer.close();

lock.unlock();

}