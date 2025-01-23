signum x = if x < 0 then -1 else if x > 0 then 1 else 0        

main = do
    putStrLn "Please enter a number"
    input <- getLine 
    let x = (read input :: Int)
    putStrLn( show (sgn (x)) )
