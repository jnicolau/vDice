# vDice
This is a clone from VDice, for educational purposes only

Use some suitable editor that can handle Solidity, HTML and Javascript, it could be Atom or Visual Studio Code with Solidity plug-in.

In order to run it you'll need:
- truffle
- ganache-cli (ex-testrpc)
- Oraclize ethereum-bridge

The commands below will help you launch it. You need to have multiple services running at the same time.

/* Command Prompt 1 */
testrpc --mnemonic "case meadow shuffle purpose renew echo before correct rate artist seed net" -a 50

/* Command Prompt 2 */

`cd "C:\Code\ethereum-bridge"

node bridge -a 49`

/* Command Prompt 3 - Windows */

`cd "C:\Code\vDice"

SET PATHEXT=.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC

truffle compile / migrate / test ...`

/* Command Prompt 3 - MacOS */

`cd "C:\Code\vDice"

truffle compile / migrate / test ...`
