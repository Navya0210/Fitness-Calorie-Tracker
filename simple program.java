import java.util.*;
public class Main{
    public static void main(String[] arg){
        int n1=8,n2=12,hcf=0;
        for(int i=1;i<=n1 && i<=n2;i++){
            if(n1%i==0 && n2%i==0){
                hcf =i;
            }
        }
        int lcm = (n1 * n2) /hcf;
        System.out.println(lcm);
        System.out.println(hcf);
    }
}