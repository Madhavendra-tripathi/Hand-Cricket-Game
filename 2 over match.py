while 1:   
    try:
        import random
        run=0
        crun=0
        attempt=0
        cattempt=0
        print("Two over match(12 balls)")
        print("Your batting")

        while 1:
            n=int(input("Enter:"))
            a=random.randint(0,6)
            if n>6:
                print("Enter no. less than 7")
                print("DEAD BALL !!\n")
                continue
            if 0>n:
                print("Runs cannot be in NEGATIVE")
                print("DEAD BALL !!\n")
                continue
            print("Computer balling:",a)
            attempt+=1
            print(attempt,"Ball")
            print(12-attempt,"ball left")
            if a==n:
                print("\nOUT!!!\n")
                break
            run=run+n
            print("Total run:",run,"\n")

            if attempt==12:
                print("Well played, 2 overs completed")
                break
            
        print("Total run made by you",run)


        print("\nComputers batting\n")
        while 1:
            y=int(input("Enter:"))
            p=random.randint(0,6)
            if p>6:
                print("Enter no. less than 7")
                print("DEAD BALL !!\n")
                continue
            print("Computer batting:",p)
            cattempt+=1
            print(cattempt,"Ball")
            print(12-cattempt,"ball left")
            if p==y:
                print("\nOUT!!!\n")
                break
            crun=crun+p
            print("Total run:",crun,"\n")
            if run<crun:
                print("Oops you Lose!! Computer Won by",crun-run,"run")
                break
            print(run-crun,"run to win of computer")
            if cattempt==12:
                print("Over completed")
                break
        if run<crun:
            pass
        elif run==crun:
            print("DRAW!!!\n")
        else:
            print("Hurrah! You WON by",run-crun,"run\n")
        ask=input("Do you want to play again (y/n):")
        if ask=="y":
            pass
        elif ask=="n":
            print("Exiting from game\n")
            break
        else:
            print("Exit\n")
            break
    except ValueError:
        print("Please enter proper input\n")