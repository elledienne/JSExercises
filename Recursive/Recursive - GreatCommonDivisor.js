// function to find the Greatest Commond Divisor (Massimo Comune Divisore)
function gcd(a, b){
	if(b){
		return gcd(b, a % b);
	} else {
		return Math.abs(a);
	}
}


/**************************
*** Note: 
*** (in italiano)
***
*** Calcolo del MCD (gcd) con l'algoritmo di Euclide:
*** 1 - Dati due numeri naturali A e B, si controlla se B è zero.
*** 2 - Se B == 0, A è il MCD
*** 3 - Se B != 0, si divide A / B e si assegna ad R il resto della divisione
*** 4 - Se R == 0 allora si può terminare affermando che B è il MCD cercato
*** 5 - Se R != 0 occorre assegnare A = B e B = R e si ripete nuovamente la divisione.
***
**************************/