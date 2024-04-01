use anchor_lang::prelude::*;

declare_id!("BNt9yPhijSp8XemxX3zkyscXvoYoY5hWm3arqpu7VuX8");

#[program]
pub mod sol_market {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
